import { Schema, model } from "mongoose";

export type CounterType={
    id:string,
    sequence_value:number
}

const CounterSchema = new Schema<CounterType>({
    id: String,
    sequence_value: Number,
});


export const CounterModel = model <CounterType>("counters",CounterSchema)