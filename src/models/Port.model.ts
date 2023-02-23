import { Schema, model } from "mongoose";

export type PortType = {
    mainPortName:string,
    countryCode:string
}

const portSchema = new Schema<PortType>({
  mainPortName: {
    type: String,
  },
  countryCode: {
    type: String,
  },
});

export const portModel = model <PortType>("port",portSchema)
