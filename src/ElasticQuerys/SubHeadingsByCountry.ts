import client from "../server/ElasticSearchConnection.js";

const SubHeadingsByCountry = async (_index:string,phrase:string) => {
    if (_index == "htshs") {
        const searchResult = await client
          .search({
            index: _index,
            size: 10000,
            query: {
              match_phrase_prefix: {
                htsno: {
                  query: phrase,
                },
              },
            },
          })
          .catch((e) => console.log("errr", e));
        return searchResult;
      } else {
        const searchResult = await client
          .search({
            index: _index,
            size: 10000,
            query: {
              match_phrase_prefix: {
                itc_hscode: {
                  query: phrase,
                },
              },
            },
          })
          .catch((e) => console.log("errr", e));
        return searchResult;
      }
};
export default SubHeadingsByCountry;