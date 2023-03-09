import { Types } from "ts-openapi";


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
      portsData: Types.Object({
        properties:{
          waterDepth: Types.Object({
            properties:{
              tidalRange: Types.String({description:"tidalRange"}),
              entranceWidth: Types.String({description:"entranceWidth"}),
              channelDepth: Types.String({description:"channelDepth"}),
              anchorageDepth: Types.String({description:"anchorageDepth"}),
              cargoPierDepth: Types.String({description:"cargoPierDepth"}),
              oilTerminalDepth: Types.String({description:"oilTerminalDepth"}),
              liquifiedNaturalGasTerminalDepth: Types.String({description:"liquifiedNaturalGasTerminalDepth"}),
            }
          }),
          harborCharacteristics: Types.Object({
            properties:{
              harborSize: Types.String({description:"harborSize"}),
              harborType: Types.String({description:"harborType"}),
              harborUse: Types.String({description:"harborUse"}),
              goodHoldingGround: Types.String({description:"goodHoldingGround"}),
              turningArea: Types.String({description:"turningArea"}),
              shelterAfforded: Types.String({description:"shelterAfforded"}),
              maximumVesselLength: Types.String({description:"maximumVesselLength"}),
              maximumVesselBeam: Types.String({description:"maximumVesselBeam"}),
              maximumVesselDraft: Types.String({description:"maximumVesselDraft"}),
              offshoreMaximumVesselLength: Types.String({description:"offshoreMaximumVesselLength"}),
            }
          }),
          entranceRestriction: Types.Object({
            properties:{
              tide: Types.String({description:"tide"}),
              heavySwell: Types.String({description:"heavySwell"}),
              ice: Types.String({description:"ice"}),
              Other: Types.String({description:"Other"}),
              overheadLimits: Types.String({description:"overheadLimits"}),
            }
          }),
          quarantine: Types.Object({
            properties:{
              qratique: Types.String({description:"qratique"}),
              sanitation: Types.String({description:"sanitation"}),
              other: Types.String({description:"other"}),
            }
          }),
          pilotage: Types.Object({
            properties:{
              compulsory: Types.String({description:"qratique"}),
              available: Types.String({description:"available"}),
              localAssistance: Types.String({description:"localAssistance"}),
              advisable: Types.String({description:"advisable"}),
            }
          })

        }
      })
    },
    modelName: "Port Details",
})

export const IndianHeadingsSchema = Types.Object({
    description: "headings in indianhs",
    properties: {
            
    },
    modelName: "Indian Headings",
})

export const subheadingsSchema = Types.Object({
    description: "subheadings in globalhs",
    properties: {
            
    },
    modelName: "SubHeadings",
})

export const hscodeSchema = Types.Object({
    description: "hscode",
    properties: {
            
    },
    modelName: "hscode",
})

export const countSchema = Types.Object({
    description: "count for searching term",
    properties: {
            
    },
    modelName: "count",
})

export const AutoSuggestionsSchema = Types.Object({
    description: "AutoSuggestions for searching term",
    properties: {
            
    },
    modelName: "AutoSuggestions",
})

export const GlobalSchema = Types.Object({
    description: "Globaldata for searching term",
    properties: {
            
    },
    modelName: "Globaldata",
})

export const globalheadingsSchema = Types.Object({
    description: "Global headings for given chapter",
    properties: {
            
    },
    modelName: "Global headings",
})

