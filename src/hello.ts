import { Application, Request, Response } from "express";
import { OpenApi, textPlain } from "ts-openapi";

function hello(_request: Request, response: Response) {
  response.send("Intoglo backend server is running!");
}

export function initHello(app: Application, openApi: OpenApi) {
  app.get("/", hello);

  // declare our API
  openApi.addPath(
    "/", // this is API path
    {
      // API method
      get: {
        description: "Intoglo backend server is running", // Method description
        summary: "Demo get request to know backend is running", // Method summary
        operationId: "get-hello-op", // an unique operation id
        responses: {
          // here we declare the response types
          200: textPlain("Successful Operation"),
        },
        tags: ["hello"], // these tags group your methods in UI
      },
    },
    true // make method visible
  );
}