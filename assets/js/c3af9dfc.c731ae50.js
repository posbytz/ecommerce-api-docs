"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[4339],{12051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),n=a(94891),o=a(74933),c=a(47507),p=(a(24310),a(63303)),d=(a(75035),a(85162));const l={id:"search",title:"Search",description:"This API provide enhanced search functionality in the store.",sidebar_label:"Search",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"search",description:"This API provide enhanced search functionality in the store.",parameters:[{name:"q",required:!0,in:"query",description:"The query string to be searched for in the store.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{categories:[{_id:34259,imgUrl:"",name:"Pasta",slug:"pasta",type:"category"}],items:[{_id:352183,name:"Tomato Basil Penne Pasta",slug:"tomato-basil-penne-pasta",type:"item",attributesGroup:[]},{_id:352184,name:"Creamy Garlic Penne Pasta",slug:"creamy-garlic-penne-pasta",type:"item",attributesGroup:[]}]}}}}}},tags:["Search"],security:[{oauth2:["search:read"]}],method:"get",path:"/ecommerce/v1/search",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Search",description:{content:"This API provide enhanced search functionality in the store.",type:"text/plain"},url:{path:["ecommerce","v1","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query string to be searched for in the store.",type:"text/plain"},key:"q",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},h=void 0,m={unversionedId:"search",id:"search",title:"Search",description:"This API provide enhanced search functionality in the store.",source:"@site/docs/search.api.mdx",sourceDirName:".",slug:"/search",permalink:"/search",draft:!1,tags:[],version:"current",frontMatter:{id:"search",title:"Search",description:"This API provide enhanced search functionality in the store.",sidebar_label:"Search",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"search",description:"This API provide enhanced search functionality in the store.",parameters:[{name:"q",required:!0,in:"query",description:"The query string to be searched for in the store.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{categories:[{_id:34259,imgUrl:"",name:"Pasta",slug:"pasta",type:"category"}],items:[{_id:352183,name:"Tomato Basil Penne Pasta",slug:"tomato-basil-penne-pasta",type:"item",attributesGroup:[]},{_id:352184,name:"Creamy Garlic Penne Pasta",slug:"creamy-garlic-penne-pasta",type:"item",attributesGroup:[]}]}}}}}},tags:["Search"],security:[{oauth2:["search:read"]}],method:"get",path:"/ecommerce/v1/search",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Search",description:{content:"This API provide enhanced search functionality in the store.",type:"text/plain"},url:{path:["ecommerce","v1","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query string to be searched for in the store.",type:"text/plain"},key:"q",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Search",permalink:"/category/search"},next:{title:"Reviews",permalink:"/category/reviews"}},u={},y=[{value:"Search",id:"search",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"search"},"Search"),(0,s.kt)("p",null,"This API provide enhanced search functionality in the store."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"q",required:!0,in:"query",description:"The query string to be searched for in the store.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "categories": [\n      {\n        "_id": 34259,\n        "imgUrl": "",\n        "name": "Pasta",\n        "slug": "pasta",\n        "type": "category"\n      }\n    ],\n    "items": [\n      {\n        "_id": 352183,\n        "name": "Tomato Basil Penne Pasta",\n        "slug": "tomato-basil-penne-pasta",\n        "type": "item",\n        "attributesGroup": []\n      },\n      {\n        "_id": 352184,\n        "name": "Creamy Garlic Penne Pasta",\n        "slug": "creamy-garlic-penne-pasta",\n        "type": "item",\n        "attributesGroup": []\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);