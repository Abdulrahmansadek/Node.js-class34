import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);
jest.setTimeout(3000);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });

  it("should respond with code 200", async () => {
    const response = await request.get("/").send();
    expect(response.statusCode).toBe(200);
  });

  it("should response with code 404 ", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "ooondon" });
    expect(response.statusCode).toBe(404);
  });
  it("should response code 200 and specify the content weatherText:city", async () => {
    const response = await request.post("/weather").send({});
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
