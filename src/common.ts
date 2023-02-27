import { Types } from "ts-openapi";

export const Chapters = [
    {
        "chapter_no": "string",
        "chapter_name": "string"
    }
]

export const errorSchema = Types.Object({
  description: "Error Object",
  properties: {
    code: Types.Integer({ description: "Error Code" }),
    errorId: Types.Uuid({ description: "Support Unique Error ID" }),
    errorDetails: Types.Array({
      arrayType: Types.String(),
      description: "Error List",
    }),
  },
  example: {
    code: "121",
    errorDetails: ["Name is mandatory.", "Unknown error"],
  },
  modelName: "ErrorResponse",
});

export const sectionSchema = Types.Object({
    description: "Sections information",
    properties: {
      _index: Types.String({ description: "index for sections" }),
      _id: Types.String({ description: "id for the index" }),
      _score: Types.Number({description: "score given by elastic search for that object in index"}),
      _source: Types.Object({properties:{
        section_level: Types.String({description: "section level"}),
        section_name: Types.String({description: "section_name"}),
        section_no: Types.String({description: "section_no"}),
        chapters: Types.String({description: "chapter details"})
      }})
    },
    modelName: "Sections",
});

export const countrySchema = Types.Object({
    description: "Country List",
    properties: {
      _id: Types.String({ description: "id for the country" }),
      countryCode: Types.String({ description: "Country Code" }),
      flag:Types.String({ description: "flag image of the country"})
    },
    modelName: "Countrys",
});

export const portSchema = Types.Object({
    description: "Ports list in given country",
    properties: {
            mainPortName: Types.String({description:"Port name"}),
            latitude: Types.String({description:"latitude for the port"}),
            longitude: Types.String({description:"longitude for the port"})
    },
    modelName: "Ports",
})

export const portDetailSchema = Types.Object({
    description:"Port details for given port",
    properties:{

    },
    modelName: "Port Details",
})
