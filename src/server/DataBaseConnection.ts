import mongoose from "mongoose";
import "dotenv/config";
const connection = mongoose.connect(`${process.env.DB}`);
export default connection;