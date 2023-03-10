import { Application, Request, Response } from "express";
import { OpenApi, bearerAuth } from "ts-openapi";
import { countrySchema, errorSchema } from "./common.js";
import { getCountries } from "./controllers/Port.controller.js";

export function initGetCountrys(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/ports/countries", getCountries);
    openApi.declareSecurityScheme("bearerSecurity", bearerAuth());
    // declare openAPI schema
    openApi.addPath(
      "/ports/countries",
      {
        get: {
          summary: "Get country list for the port page",
          description: "This operation retrieves country list information from database",
          operationId: "get-countrys-op",
          tags: ["ports page"],
          security: [{ bearerSecurity: [] }],
          responses: {
            200: openApi.declareSchema("Successful Operation", countrySchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

