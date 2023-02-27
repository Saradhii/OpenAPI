import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { portSchema, errorSchema} from "./common.js";
import { getPorts } from "./controllers/Port.controller.js";


export function initGetPorts(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/ports/:countryName", getPorts);
  
    // declare openAPI schema
    openApi.addPath(
      "/ports/:countryName",
      {
        get: {
          summary: "Get all ports",
          description: "This operation retrieves ports data information in given country",
          operationId: "get-ports-op",
          requestSchema: {
            params: {
                countryName: Types.String({
                description: "Country",
                required: true, // param values MUST be required
                example: "Albania",
              }),
            },
          },
          tags: ["ports page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", portSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

