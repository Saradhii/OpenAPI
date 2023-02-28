---
title: Intolgo backend Api v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="intolgo-backend-api">Intolgo backend Api v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Describing how to keep APIs documented.

Base URLs:

* <a href="http://localhost:8070">http://localhost:8070</a>

<a href="http://dummy.io/terms/">Terms of service</a>
Email: <a href="mailto:vijaya.saradhi@intoglo.com">Support</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="intolgo-backend-api-hello">hello</h1>

## Demo get request to know backend is running

<a id="opIdget-hello-op"></a>

`GET /`

Intoglo backend server is running

> Example responses

<h3 id="demo-get-request-to-know-backend-is-running-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|None|

<h3 id="demo-get-request-to-know-backend-is-running-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="intolgo-backend-api-ports-page">ports page</h1>

## Get country list for the port page

<a id="opIdget-countrys-op"></a>

`GET /ports/countries`

This operation retrieves country list information from database

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "countryCode": "string",
  "flag": "string"
}
```

<h3 id="get-country-list-for-the-port-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Countrys](#schemacountrys)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerSecurity
</aside>

## Get all ports

<a id="opIdget-ports-op"></a>

`GET /ports/{countryName}`

This operation retrieves ports data information in given country

<h3 id="get-all-ports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryName|path|string|true|Country|

> Example responses

> 200 Response

```json
{
  "mainPortName": "string",
  "latitude": "string",
  "longitude": "string"
}
```

<h3 id="get-all-ports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Ports](#schemaports)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get sections and chapters data

<a id="opIdget-portdetails-op"></a>

`GET /ports/{countryName}/{portName}`

This operation retrieves sections & chapters information from global hscodes data

<h3 id="get-sections-and-chapters-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryName|path|string|true|Country|
|portName|path|string|true|Port|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-sections-and-chapters-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Port Details](#schemaport details)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="intolgo-backend-api-hscode-page">hscode page</h1>

## Get sections and chapters data

<a id="opIdget-sections-op"></a>

`GET /getsections/{index}`

This operation retrieves sections & chapters information from global hscodes data

<h3 id="get-sections-and-chapters-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|Sections index|

> Example responses

> 200 Response

```json
{
  "_index": "string",
  "_id": "string",
  "_score": 0,
  "_source": {
    "section_level": "string",
    "section_name": "string",
    "section_no": "string",
    "chapters": "string"
  }
}
```

<h3 id="get-sections-and-chapters-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Sections](#schemasections)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get headings or hs4 data from indianhs

<a id="opIdget-headingsIndia-op"></a>

`GET /getheadingsindia/{index}`

This operation retrieves headings or hs4 data from indianhs

<h3 id="get-headings-or-hs4-data-from-indianhs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|chapter no|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-headings-or-hs4-data-from-indianhs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Indian Headings](#schemaindian headings)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get subheadings or hs6 data from globalhs

<a id="opIdget-subHeadings-op"></a>

`GET /getsubheadings/{index}`

This operation retrieves subheadings or hs6 data from globalhs

<h3 id="get-subheadings-or-hs6-data-from-globalhs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|heading no|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-subheadings-or-hs6-data-from-globalhs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[SubHeadings](#schemasubheadings)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get hscode from globalhs

<a id="opIdget-hscode-op"></a>

`GET /gethscode/{index}`

This operation retrieves subheadings or hs6 data from globalhs

<h3 id="get-hscode-from-globalhs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|sub heading number|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-hscode-from-globalhs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[hscode](#schemahscode)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get count of searching term

<a id="opIdget-count-op"></a>

`GET /searchglobalres/{index}`

This operation retrieves Get count of searching term

<h3 id="get-count-of-searching-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|sub heading number|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-count-of-searching-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[count](#schemacount)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get auto suggestions of searching term

<a id="opIdget-search-op"></a>

`GET /searchhs/{index}`

This operation retrieves auto suggestions of searching term

<h3 id="get-auto-suggestions-of-searching-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|sub heading number|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-auto-suggestions-of-searching-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[AutoSuggestions](#schemaautosuggestions)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get global data for searching term

<a id="opIdget-globalData-op"></a>

`GET /searchglobal/{index}`

This operation retrieves auto suggestions of searching term

<h3 id="get-global-data-for-searching-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|sub heading number|
|n|query|number(double)|true|from number|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-global-data-for-searching-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Globaldata](#schemaglobaldata)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get country specific data for searching term

<a id="opIdget-countrydata-op"></a>

`GET /searchcountryhscode/{index}`

This operation retrieves country specific data for searching term

<h3 id="get-country-specific-data-for-searching-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|sub heading number|
|n|query|number(double)|true|from number|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-country-specific-data-for-searching-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Globaldata](#schemaglobaldata)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get headings or hs4 data from globalhs

<a id="opIdget-headings-op"></a>

`GET /getheadings/{index}`

This operation retrieves headings or hs4 data from globalhs

<h3 id="get-headings-or-hs4-data-from-globalhs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|chapter no|
|index|path|string|true|index|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-headings-or-hs4-data-from-globalhs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[Global headings](#schemaglobal headings)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Countrys">Countrys</h2>
<!-- backwards compatibility -->
<a id="schemacountrys"></a>
<a id="schema_Countrys"></a>
<a id="tocScountrys"></a>
<a id="tocscountrys"></a>

```json
{
  "_id": "string",
  "countryCode": "string",
  "flag": "string"
}

```

Country List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|id for the country|
|countryCode|string|false|none|Country Code|
|flag|string|false|none|flag image of the country|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "code": "121",
  "errorDetails": [
    "Name is mandatory.",
    "Unknown error"
  ]
}

```

Error Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|Error Code|
|errorId|string(uuid)|false|none|Support Unique Error ID (min:36 chars, max:36 chars)|
|errorDetails|[string]|false|none|Error List|

<h2 id="tocS_Ports">Ports</h2>
<!-- backwards compatibility -->
<a id="schemaports"></a>
<a id="schema_Ports"></a>
<a id="tocSports"></a>
<a id="tocsports"></a>

```json
{
  "mainPortName": "string",
  "latitude": "string",
  "longitude": "string"
}

```

Ports list in given country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mainPortName|string|false|none|Port name|
|latitude|string|false|none|latitude for the port|
|longitude|string|false|none|longitude for the port|

<h2 id="tocS_Port Details">Port Details</h2>
<!-- backwards compatibility -->
<a id="schemaport details"></a>
<a id="schema_Port Details"></a>
<a id="tocSport details"></a>
<a id="tocsport details"></a>

```json
{}

```

Port details for given port

### Properties

*None*

<h2 id="tocS_Sections">Sections</h2>
<!-- backwards compatibility -->
<a id="schemasections"></a>
<a id="schema_Sections"></a>
<a id="tocSsections"></a>
<a id="tocssections"></a>

```json
{
  "_index": "string",
  "_id": "string",
  "_score": 0,
  "_source": {
    "section_level": "string",
    "section_name": "string",
    "section_no": "string",
    "chapters": "string"
  }
}

```

Sections information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_index|string|false|none|index for sections|
|_id|string|false|none|id for the index|
|_score|number(double)|false|none|score given by elastic search for that object in index|
|_source|object|false|none|Parameter without description.|
|» section_level|string|false|none|section level|
|» section_name|string|false|none|section_name|
|» section_no|string|false|none|section_no|
|» chapters|string|false|none|chapter details|

<h2 id="tocS_Indian Headings">Indian Headings</h2>
<!-- backwards compatibility -->
<a id="schemaindian headings"></a>
<a id="schema_Indian Headings"></a>
<a id="tocSindian headings"></a>
<a id="tocsindian headings"></a>

```json
{}

```

headings in indianhs

### Properties

*None*

<h2 id="tocS_SubHeadings">SubHeadings</h2>
<!-- backwards compatibility -->
<a id="schemasubheadings"></a>
<a id="schema_SubHeadings"></a>
<a id="tocSsubheadings"></a>
<a id="tocssubheadings"></a>

```json
{}

```

subheadings in globalhs

### Properties

*None*

<h2 id="tocS_hscode">hscode</h2>
<!-- backwards compatibility -->
<a id="schemahscode"></a>
<a id="schema_hscode"></a>
<a id="tocShscode"></a>
<a id="tocshscode"></a>

```json
{}

```

hscode

### Properties

*None*

<h2 id="tocS_count">count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
{}

```

count for searching term

### Properties

*None*

<h2 id="tocS_AutoSuggestions">AutoSuggestions</h2>
<!-- backwards compatibility -->
<a id="schemaautosuggestions"></a>
<a id="schema_AutoSuggestions"></a>
<a id="tocSautosuggestions"></a>
<a id="tocsautosuggestions"></a>

```json
{}

```

AutoSuggestions for searching term

### Properties

*None*

<h2 id="tocS_Globaldata">Globaldata</h2>
<!-- backwards compatibility -->
<a id="schemaglobaldata"></a>
<a id="schema_Globaldata"></a>
<a id="tocSglobaldata"></a>
<a id="tocsglobaldata"></a>

```json
{}

```

Globaldata for searching term

### Properties

*None*

<h2 id="tocS_Global headings">Global headings</h2>
<!-- backwards compatibility -->
<a id="schemaglobal headings"></a>
<a id="schema_Global headings"></a>
<a id="tocSglobal headings"></a>
<a id="tocsglobal headings"></a>

```json
{}

```

Global headings for given chapter

### Properties

*None*

