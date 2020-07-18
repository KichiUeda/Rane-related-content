require("dotenv").config({
  path: "../",
});
const { createInstance } = require("axios-test-instance");
const server = require("../server/server.js");

let instance;

const OLD_ENV = process.env;

beforeAll(async () => {
  instance = await createInstance(server);
});

afterAll(async () => {
  await instance.close();
});

describe("GET /related/:product_id", () => {
  test("returns status 404 when passed an invalid id", async () => {
    let { status } = await server.get("/related/122");
    expect(status).toBe(404);
  });
  test("returns status 400 when not passed an id", () => {
    let { status } = await server.get("/related");
    expect(status).toBe(400);
  })
});
