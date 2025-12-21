# openlist-sdk

OpenList SDK（TypeScript / ESM）。

## 使用

SDK 默认导出多个模块的 API（Admin / Authentication / FileSystem / Public / Sharing / User 等），以及相关类型。

```ts
import { OpenList } from "openlist-sdk";

const openList = new OpenList({
  token: process.env.OPENLIST_TOKEN ?? "",
  baseUrl: process.env.OPENLIST_BASE_URL ?? "",
});

try {
  const user = await openList.user.me();
  console.log(user);
} catch (error) {
  console.error(error);
}
```

参数说明：

- **`baseUrl`**：OpenList 站点地址（例如 `https://example.com/`）。SDK 会自动拼接为 `new URL("api/", baseUrl)`。
- **`token`**：请求头 `Authorization` 的值。

如果你想直接使用各模块 API/类型（以实际导出为准）：

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
