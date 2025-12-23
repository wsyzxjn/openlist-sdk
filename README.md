# openlist-sdk

OpenList SDK（TypeScript / ESM）。

这是一个用于与 OpenList API 交互的非官方 TypeScript SDK，提供了完整的类型定义和便捷的方法封装。

## 功能特性

- **认证 (Authentication)**: 支持账号登录、2FA、SSO (LDAP)、WebAuthn 等多种认证方式。
- **文件系统 (File System)**: 文件的列出、搜索、上传 (Stream/Form)、下载、移动、复制、重命名及离线下载等。
- **分享 (Sharing)**: 创建、管理、删除分享链接。
- **用户 (User)**: 获取当前用户信息、管理 SSH Key。
- **管理 (Admin)**: 只有管理员可用的接口，包括用户管理、存储挂载管理、系统设置、元数据管理等。
- **公共 (Public)**: 获取公开配置、离线下载工具列表等。

## 安装

推荐使用包管理器进行安装：

### npm
```bash
npm install openlist-sdk
```

### pnpm
```bash
pnpm add openlist-sdk
```

### yarn
```bash
yarn add openlist-sdk
```

### bun
```bash
bun add openlist-sdk
```

## 使用示例

### 初始化

首先需要创建一个 `OpenList` 实例。

```ts
import { OpenList } from "openlist-sdk";

const openList = new OpenList({
  // OpenList 站点地址 (例如 https://alist.example.com)
  baseUrl: process.env.OPENLIST_BASE_URL ?? "http://localhost:5244",
  // API Token (请求头 Authorization 的值)
  token: process.env.OPENLIST_TOKEN ?? "your-api-token",
});
```

### 用户 (User)

获取当前登录用户的信息。

```ts
try {
  const user = await openList.user.me();
  console.log("当前用户:", user.data);
} catch (error) {
  console.error("获取用户信息失败:", error);
}
```

### 文件系统 (File System)

列出根目录下的文件并上传一个新文件。

```ts
import { join } from "node:path";
import { readFileSync } from "node:fs";

async function fileSystemExample() {
  try {
    // 1. 列出根目录文件
    const files = await openList.fileSystem.list({
      path: "/",
      password: "", // 如果文件夹有密码
      page: 1,
      per_page: 0, // 0 表示列出所有
      refresh: false,
    });
    console.log("文件列表:", files.data.content);

    // 2. 上传文件 (使用 FormData 方式)
    const fileContent = new Blob(["Hello OpenList!"], { type: "text/plain" });
    // 或者在 Node.js 环境中读取文件:
    // const fileContent = new Blob([readFileSync("test.txt")]);

    await openList.fileSystem.uploadForm(fileContent, {
      path: "/test.txt",
      // 其他可选头部信息
    });
    console.log("文件上传成功");

  } catch (error) {
    console.error("文件操作失败:", error);
  }
}
```

### 分享 (Sharing)

创建一个具有过期时间的分享链接。

```ts
async function sharingExample() {
  try {
    // 创建分享
    const share = await openList.sharing.create({
      path: "/docs",
      password: "optional-password",
      expire: 24, // 过期时间（小时）
    });
    console.log("分享创建成功:", share.data);

    // 列出所有分享
    const shareList = await openList.sharing.list({
      page: 1,
      per_page: 20,
    });
    console.log("我的分享:", shareList.data.content);

  } catch (error) {
    console.error("分享操作失败:", error);
  }
}
```

### 管理 (Admin)

管理员功能示例：列出系统中的用户。

```ts
async function adminExample() {
  try {
    const users = await openList.admin.listUsers({
      page: 1,
      per_page: 10,
    });
    console.log("用户列表:", users.data.content);
  } catch (error) {
    console.error("管理操作失败:", error);
  }
}
```

### 类型导入

如果你只需要导入类型定义：

```ts
import type {
  AdminEndpoints,
  AuthenticationEndpoints,
  FileSystemEndpoints,
  PublicEndpoints,
  SharingEndpoints,
  UserEndpoints,
} from "openlist-sdk";
```

## 参数说明

`new OpenList(options)` 的配置项：

- **`baseUrl`**：OpenList 站点地址（例如 `https://example.com/`）。SDK 会自动拼接为 `new URL("api/", baseUrl)`。
- **`token`**：认证 Token，即请求头 `Authorization` 的值。
