import type FileSystemEndpoints from "@/types/api/file-system/index.js";
import type { KyInstance, Options } from "ky";
import type { ApiMethod, Arg, ReqOf, ResOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type BodyInit = NonNullable<Options["body"]>;

type AllEndpoints = keyof FileSystemEndpoints;

type Req<K extends AllEndpoints> = ReqOf<FileSystemEndpoints, K>;

type BaseFileSystemApi = ApiMethod<FileSystemEndpoints>;

export type IFileSystemApi = Omit<
  BaseFileSystemApi,
  "uploadStream" | "uploadForm"
> & {
  uploadStream: (
    data: BodyInit,
    options: Arg<Req<"UploadStream">>
  ) => Promise<ResOf<FileSystemEndpoints, "UploadStream">>;
  uploadForm: (
    file: string | Blob,
    options: Arg<Req<"UploadForm">>
  ) => Promise<ResOf<FileSystemEndpoints, "UploadForm">>;
};

export class FileSystemApi
  extends BaseApi<FileSystemEndpoints>
  implements IFileSystemApi
{
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async list(options: Arg<Req<"List">>) {
    return this.postJson("List", "list", options);
  }

  async get(options: Arg<Req<"Get">>) {
    return this.postJson("Get", "get", options);
  }

  async search(options: Arg<Req<"Search">>) {
    return this.postJson("Search", "search", options);
  }

  async dirs(options: Arg<Req<"Dirs">>) {
    return this.postJson("Dirs", "dirs", options);
  }

  async mkdir(options: Arg<Req<"Mkdir">>) {
    return this.postJson("Mkdir", "mkdir", options);
  }

  async rename(options: Arg<Req<"Rename">>) {
    return this.postJson("Rename", "rename", options);
  }

  async move(options: Arg<Req<"Move">>) {
    return this.postJson("Move", "move", options);
  }

  async copy(options: Arg<Req<"Copy">>) {
    return this.postJson("Copy", "copy", options);
  }

  async remove(options: Arg<Req<"Remove">>) {
    return this.postJson("Remove", "remove", options);
  }

  async recursiveMove(options: Arg<Req<"RecursiveMove">>) {
    return this.postJson("RecursiveMove", "recursive_move", options);
  }

  async batchRename(options: Arg<Req<"BatchRename">>) {
    return this.postJson("BatchRename", "batch_rename", options);
  }

  async regexRename(options: Arg<Req<"RegexRename">>) {
    return this.postJson("RegexRename", "regex_rename", options);
  }

  async removeEmptyDirectory(options: Arg<Req<"RemoveEmptyDirectory">>) {
    return this.postJson(
      "RemoveEmptyDirectory",
      "remove_empty_directory",
      options
    );
  }

  async other(options: Arg<Req<"Other">>) {
    return this.postJson("Other", "other", options);
  }

  async addOfflineDownload(options: Arg<Req<"AddOfflineDownload">>) {
    return this.postJson("AddOfflineDownload", "add_offline_download", options);
  }

  async archiveList(options: Arg<Req<"ArchiveList">>) {
    return this.postJson("ArchiveList", "archive/list", options);
  }

  async archiveMeta(options: Arg<Req<"ArchiveMeta">>) {
    return this.postJson("ArchiveMeta", "archive/meta", options);
  }

  async archiveDecompress(options: Arg<Req<"ArchiveDecompress">>) {
    return this.postJson("ArchiveDecompress", "archive/decompress", options);
  }

  async uploadStream(file: BodyInit, options: Arg<Req<"UploadStream">>) {
    return this.httpClient("upload/stream", {
      method: "put",
      headers: {
        "Content-Type": "application/octet-stream",
        ...options,
      },
      body: file,
    }).json<ResOf<FileSystemEndpoints, "UploadStream">>();
  }

  async uploadForm(file: string | Blob, options: Arg<Req<"UploadForm">>) {
    const form = new FormData();
    form.append("file", file);

    return this.httpClient("form", {
      method: "put",
      headers: {
        ...options,
      },
      body: form,
    }).json<ResOf<FileSystemEndpoints, "UploadForm">>();
  }
}
