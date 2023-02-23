import client from "../server/ElasticSearchConnection.js";

const SearchInCountryHscode = async (_index:string,phrase:any,from:number) => {
    phrase = phrase.trim();
  if (phrase.includes(" ")) {
    phrase = phrase.replace(/\s+/g, " ");
    phrase = phrase.replace(/[^a-zA-Z0-9 ]/g, "");
    const words = phrase.split(" ");
    const searchResult = await client
      .search({
        index: _index,
        size: 5,
        from: from,
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: words[0],
                  type: "phrase_prefix",
                  fields: ["hscode", "description", "htsno", "itc_hscode"],
                },
              },

              {
                multi_match: {
                  query: words[1],
                  type: "phrase_prefix",
                  fields: ["hscode", "description", "htsno", "itc_hscode"],
                },
              },
            ],
          },
        },
      })
      .catch((e) => console.log("errr", e));
    return searchResult;
  } else {
    phrase = phrase.replace(/[^a-zA-Z0-9 ]/g, "");
    if(_index=="htshs" && !isNaN(phrase))
    {
        if(!phrase.includes("."))
        {
          if(phrase.length<=6)
           {
            phrase= phrase.slice(0, 4) + '.' + phrase.slice(4);  
           }
          else if(phrase.length<=8)
           {
            phrase= phrase.slice(0, 4) + '.' + phrase.slice(4);
            phrase = phrase.slice(0, 7) + '.' + phrase.slice(7);
           }
          else{
            phrase= phrase.slice(0, 4) + '.' + phrase.slice(4);
            phrase = phrase.slice(0, 7) + '.' + phrase.slice(7);
            phrase = phrase.slice(0, 10) + '.' + phrase.slice(10); 
           }
        }
    }
    console.log(phrase);
    const searchResult = await client
      .search({
        index: _index,
        size: 5,
        from: from,
        query: {
          dis_max: {
            queries: [
              {
                multi_match: {
                  query: phrase,
                  type: "phrase_prefix",
                  fields: ["hscode", "description", "htsno", "itc_hscode"],
                  minimum_should_match: "50%",
                },
              },
              {
                fuzzy: {
                  description: {
                    value: phrase,
                    fuzziness: "AUTO",
                  },
                },
              },
            ],
          },
        },
      })
      .catch((e) => console.log("errr", e));
    return searchResult;
  }
};
export default SearchInCountryHscode;