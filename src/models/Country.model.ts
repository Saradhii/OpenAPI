import { Schema, model } from "mongoose";
const CountrySchema = new Schema();
export const CountryModel = model("countrys",CountrySchema);
