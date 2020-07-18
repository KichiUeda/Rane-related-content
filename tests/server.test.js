// require("dotenv").config({
//   path: "../",
// });
const { createInstance } = require("axios-test-instance");
const server = require("../server/server.js");

let instance;

beforeAll(async () => {
  instance = await createInstance(server);
});

afterAll(async () => {
  await instance.close();
});

describe("GET /related/:product_id", () => {
  xtest("returns status 404 when passed an invalid id", async () => {
    let { status } = await instance.get("/related/122");
    expect(status).toBe(404);
  });
  test("returns status 400 when not passed an id", async () => {
    let { status } = await instance.get("/related");
    expect(status).toBe(400);
  });
});
