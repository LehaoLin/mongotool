import { insert, update, query, remove } from "./api.js";

(async () => {
  console.log('start test')
  await insert({ a: 1 }, "test");
  let result = await query({ a: 1 }, "test");
  console.log(result);
  await update({ a: 2 }, { a: 1 }, "test");
  result = await query({ a: 1 }, "test");
  console.log(result);
  await remove({ a: 2 }, "test");
  result = await query({ a: 1 }, "test");
  console.log(result);
})();
