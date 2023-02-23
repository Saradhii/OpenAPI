import {Client} from "@elastic/elasticsearch";
import "dotenv/config";
const client = new Client({
    node: `${process.env.ELASTIC_SEARCH}`,
});
export default client;