import client from "../server/ElasticSearchConnection.js";

const GlobalHeadings = async (_index:string,phrase:string) => {

    const searchResult = await client
      .search({
        index: _index,
        size: 7000,
        query: {
          match_phrase: {
              chapter_no: {
                query: phrase
              }
            }
        },
      })
      .catch((e) => console.log("errr", e));
    return searchResult;
};
export default GlobalHeadings;