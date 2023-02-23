import client from "../server/ElasticSearchConnection.js";

const GlobalSubHeadings = async (_index:string,phrase:string) => {
    if(phrase.includes("."))
    {
     var str = phrase.replace('.','');
     const searchResult = await client
       .search({
         index: _index,
         size: 7000,
         query: {
           multi_match:
           {
            query: str,
            type: "phrase_prefix",
            fields: ["heading_no","hscode",]
           }
         },
       })
       .catch((e) => console.log("errr", e));
     return searchResult;
    }
    else
    {
     const searchResult = await client
       .search({
         index: _index,
         size: 7000,
         query: {
           multi_match:
           {
            query: phrase,
            type: "phrase_prefix",
            fields: ["heading_no","hscode",]
           }
         },
       })
       .catch((e) => console.log("errr", e));
     return searchResult;
    }
};
export default GlobalSubHeadings;