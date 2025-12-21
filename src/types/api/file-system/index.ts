import type * as AddOfflineDownload from "./add-offline-download.js";
import type * as ArchiveDecompress from "./archive-decompress.js";
import type * as ArchiveList from "./archive-list.js";
import type * as ArchiveMeta from "./archive-meta.js";
import type * as BatchRename from "./batch-rename.js";
import type * as Copy from "./copy.js";
import type * as Dirs from "./dirs.js";
import type * as Get from "./get.js";
import type * as List from "./list.js";
import type * as Mkdir from "./mkdir.js";
import type * as Move from "./move.js";
import type * as Other from "./other.js";
import type * as RecursiveMove from "./recursive-move.js";
import type * as RegexRename from "./regex-rename.js";
import type * as Remove from "./remove.js";
import type * as RemoveEmptyDirectory from "./remove-empty-directory.js";
import type * as Rename from "./rename.js";
import type * as Search from "./search.js";
import type * as UploadForm from "./upload-form.js";
import type * as UploadStream from "./upload-stream.js";

export default interface FileSystemEndpoints {
  AddOfflineDownload: [AddOfflineDownload.Request, AddOfflineDownload.Response];
  ArchiveDecompress: [ArchiveDecompress.Request, ArchiveDecompress.Response];
  ArchiveList: [ArchiveList.Request, ArchiveList.Response];
  ArchiveMeta: [ArchiveMeta.Request, ArchiveMeta.Response];
  BatchRename: [BatchRename.Request, BatchRename.Response];
  Copy: [Copy.Request, Copy.Response];
  Dirs: [Dirs.Request, Dirs.Response];
  Get: [Get.Request, Get.Response];
  List: [List.Request, List.Response];
  Mkdir: [Mkdir.Request, Mkdir.Response];
  Move: [Move.Request, Move.Response];
  Other: [Other.Request, Other.Response];
  RecursiveMove: [RecursiveMove.Request, RecursiveMove.Response];
  RegexRename: [RegexRename.Request, RegexRename.Response];
  Remove: [Remove.Request, Remove.Response];
  RemoveEmptyDirectory: [
    RemoveEmptyDirectory.Request,
    RemoveEmptyDirectory.Response,
  ];
  Rename: [Rename.Request, Rename.Response];
  Search: [Search.Request, Search.Response];
  UploadForm: [UploadForm.Request, UploadForm.Response];
  UploadStream: [UploadStream.Request, UploadStream.Response];
}
