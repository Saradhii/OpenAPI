import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { portDetailSchema, errorSchema } from "./common.js";
import {getPortsDetails} from "./controllers/Port.controller.js";

export function initGetPortDetails(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/ports/:countryName/:portName", getPortsDetails);
  
    // declare openAPI schema
    openApi.addPath(
        "/ports/:countryName/:portName",
      {
        get: {
          summary: "Get sections and chapters data",
          description: "This operation retrieves sections & chapters information from global hscodes data",
          operationId: "get-portdetails-op",
          requestSchema: {
            params: {
                countryName: Types.String({
                description: "Country",
                required: true, // param values MUST be required
                example: "Albania",
              }),
              portName:Types.String({
                description: "Port",
                required: true, // param values MUST be required
                example: "Vlores",
              })
            },
          },
          tags: ["ports page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", portDetailSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

