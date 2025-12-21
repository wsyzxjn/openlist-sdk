import { OpenList } from "../dist/index.js";

const openList = new OpenList({
  token: process.env.OPENLIST_TOKEN!,
  baseUrl: process.env.OPENLIST_BASE_URL!,
});

try {
  const user = await openList.user.me();
  console.log(user);
} catch (error) {
  console.error(error);
}
