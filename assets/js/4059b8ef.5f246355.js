"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[645],{74258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),o=r(94891),n=r(74933),l=r(47507),p=(r(24310),r(63303)),c=(r(75035),r(85162));const u={id:"get-categories",title:"Get Categories",description:"Use this API to retrieve a full list of Categories.",sidebar_label:"Get Categories",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCategories",description:"Use this API to retrieve a full list of Categories.",parameters:[{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}},{name:"id",required:!1,in:"query",description:"Unique identifier of the category.",schema:{type:"array",items:{type:"number"}}},{name:"slug",required:!1,in:"query",description:"A common or friendly name for the category, should be in lowercase.",schema:{type:"array",items:{type:"string"}}},{name:"parentCategoryId",required:!1,in:"query",description:"Unique identifier of the parent category.",schema:{type:"array",items:{type:"number"}}},{name:"active",required:!1,in:"query",description:"The current state of the category.",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"search",required:!1,in:"query",description:"The query string to be searched for the category.",schema:{type:"string"}},{name:"level",required:!1,in:"query",description:"The number of sub-category level to filter.",schema:{default:5,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{results:[{_id:34258,name:"Pizza",parentCategoryId:null,slug:"pizza",parentCategories:[],parentCategory:null,subCategories:[],itemsCount:4}],pagination:{currentPage:1,lastPage:1,perPage:20,totalResults:1}}}}}}},tags:["Categories"],security:[{oauth2:["category:read"]}],method:"get",path:"/ecommerce/v1/categories",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Categories",description:{content:"Use this API to retrieve a full list of Categories.",type:"text/plain"},url:{path:["ecommerce","v1","categories"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"By default first page will be listed. For navigating through pages, use the page parameter.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results to return per request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Unique identifier of the category.",type:"text/plain"},key:"id",value:""},{disabled:!1,description:{content:"A common or friendly name for the category, should be in lowercase.",type:"text/plain"},key:"slug",value:""},{disabled:!1,description:{content:"Unique identifier of the parent category.",type:"text/plain"},key:"parentCategoryId",value:""},{disabled:!1,description:{content:"The current state of the category.",type:"text/plain"},key:"active",value:""},{disabled:!1,description:{content:"The query string to be searched for the category.",type:"text/plain"},key:"search",value:""},{disabled:!1,description:{content:"The number of sub-category level to filter.",type:"text/plain"},key:"level",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},d=void 0,m={unversionedId:"get-categories",id:"get-categories",title:"Get Categories",description:"Use this API to retrieve a full list of Categories.",source:"@site/docs/get-categories.api.mdx",sourceDirName:".",slug:"/get-categories",permalink:"/ecommerce-api-docs/get-categories",draft:!1,tags:[],version:"current",frontMatter:{id:"get-categories",title:"Get Categories",description:"Use this API to retrieve a full list of Categories.",sidebar_label:"Get Categories",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCategories",description:"Use this API to retrieve a full list of Categories.",parameters:[{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}},{name:"id",required:!1,in:"query",description:"Unique identifier of the category.",schema:{type:"array",items:{type:"number"}}},{name:"slug",required:!1,in:"query",description:"A common or friendly name for the category, should be in lowercase.",schema:{type:"array",items:{type:"string"}}},{name:"parentCategoryId",required:!1,in:"query",description:"Unique identifier of the parent category.",schema:{type:"array",items:{type:"number"}}},{name:"active",required:!1,in:"query",description:"The current state of the category.",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"search",required:!1,in:"query",description:"The query string to be searched for the category.",schema:{type:"string"}},{name:"level",required:!1,in:"query",description:"The number of sub-category level to filter.",schema:{default:5,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{results:[{_id:34258,name:"Pizza",parentCategoryId:null,slug:"pizza",parentCategories:[],parentCategory:null,subCategories:[],itemsCount:4}],pagination:{currentPage:1,lastPage:1,perPage:20,totalResults:1}}}}}}},tags:["Categories"],security:[{oauth2:["category:read"]}],method:"get",path:"/ecommerce/v1/categories",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Categories",description:{content:"Use this API to retrieve a full list of Categories.",type:"text/plain"},url:{path:["ecommerce","v1","categories"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"By default first page will be listed. For navigating through pages, use the page parameter.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results to return per request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Unique identifier of the category.",type:"text/plain"},key:"id",value:""},{disabled:!1,description:{content:"A common or friendly name for the category, should be in lowercase.",type:"text/plain"},key:"slug",value:""},{disabled:!1,description:{content:"Unique identifier of the parent category.",type:"text/plain"},key:"parentCategoryId",value:""},{disabled:!1,description:{content:"The current state of the category.",type:"text/plain"},key:"active",value:""},{disabled:!1,description:{content:"The query string to be searched for the category.",type:"text/plain"},key:"search",value:""},{disabled:!1,description:{content:"The number of sub-category level to filter.",type:"text/plain"},key:"level",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Categories",permalink:"/ecommerce-api-docs/category/categories"},next:{title:"Items",permalink:"/ecommerce-api-docs/category/items"}},y={},g=[{value:"Get Categories",id:"get-categories",level:2}],h={toc:g};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-categories"},"Get Categories"),(0,i.kt)("p",null,"Use this API to retrieve a full list of Categories."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"id",required:!1,in:"query",description:"Unique identifier of the category.",schema:{type:"array",items:{type:"number"}}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"slug",required:!1,in:"query",description:"A common or friendly name for the category, should be in lowercase.",schema:{type:"array",items:{type:"string"}}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"parentCategoryId",required:!1,in:"query",description:"Unique identifier of the parent category.",schema:{type:"array",items:{type:"number"}}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"active",required:!1,in:"query",description:"The current state of the category.",example:"true",schema:{enum:["true","false"],type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"search",required:!1,in:"query",description:"The query string to be searched for the category.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"level",required:!1,in:"query",description:"The number of sub-category level to filter.",schema:{default:5,type:"number"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Success response")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "results": [\n      {\n        "_id": 34258,\n        "name": "Pizza",\n        "parentCategoryId": null,\n        "slug": "pizza",\n        "parentCategories": [],\n        "parentCategory": null,\n        "subCategories": [],\n        "itemsCount": 4\n      }\n    ],\n    "pagination": {\n      "currentPage": 1,\n      "lastPage": 1,\n      "perPage": 20,\n      "totalResults": 1\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);