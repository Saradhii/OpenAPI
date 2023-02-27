import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { sectionSchema, errorSchema } from "./common.js";
import Sections_Chapters from "./ElasticQuerys/Sections&Chapters.js";

const getSections =  async (_request: Request, response: Response) => {
    const sections_chapters = await Sections_Chapters(_request.params.index);
    response.status(200).send(sections_chapters);
}


export function initGetSections(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/getsections/:index", getSections);
  
    // declare openAPI schema
    openApi.addPath(
      "/getsections/:index",
      {
        get: {
          summary: "Get sections and chapters data",
          description: "This operation retrieves sections & chapters information from global hscodes data",
          operationId: "get-sections-op",
          requestSchema: {
            params: {
                index: Types.String({
                description: "Sections index",
                required: true, // param values MUST be required
                example: "sections_chapters",
              }),
            },
          },
          tags: ["hscode"],
          responses: {
            200: openApi.declareSchema("Successful Operation", sectionSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

