// Type for Global headings
export type headings_global_type = {
    "_index":string,
    "_id":string,
    "_score":number,
    "_source":{
    "section_level": string,
    "section_no": string,
    "section": string,
    "chapter_no": string,
    "chapter": string,
    "heading_no": string,
    "heading": string,
    "hscode": string,
    "description": string
    },
}

//Type for Globaldata+Indiandata+Usadata 
export type globaldata = {
        "_index": string,
        "_id": string,
        "_score": number,
        "_source": {
          "section_level": string,
          "section_no": string,
          "section": string,
          "chapter_no": string,
          "chapter": string,
          "heading_no": string,
          "heading": string,
          "hscode": string,
          "description": string
        },
        "indiaData": [
          {
            "_index": string,
            "_id": string,
            "_score": number,
            "_source": {
              "chapter": string,
              "itc_hscode": string,
              "description": string,
              "unit": string
            }
          }
        ],
        "usaData": [
          {
            "_index": string,
            "_id": string,
            "_score": number,
            "_source": {
              "additionalDuties": string,
              "other": string,
              "indent": string,
              "description": string,
              "quotaQuantity": string,
              "special": string,
              "htsno": string,
              "general": string,
              "units": [
                string
              ],
              "footnotes": [
                {
                  "marker": string,
                  "columns": [
                    string
                  ],
                  "value": string,
                  "type": string
                }
              ]
            }
          }
        ]
}