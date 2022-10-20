"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[260],{34788:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var a=t(87462),r=(t(67294),t(3905)),d=t(26389),i=t(94891),n=t(74933),o=t(47507),u=(t(24310),t(63303)),p=(t(75035),t(85162));const l={id:"get-user-address",title:"Get Address by Id",description:"This API is used to retrieve address using id.",sidebar_label:"Get Address by Id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserAddress",description:"This API is used to retrieve address using id.",parameters:[{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{annotation:"Home",line:"Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"632c5839b5f554ad3047e13a"}}}}},404:{description:"Address not found error response",content:{"application/json":{example:{statusCode:404,message:"Not Found"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"get",path:"/v1/users/address/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Address by Id",description:{content:"This API is used to retrieve address using id.",type:"text/plain"},url:{path:["v1","users","address",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique ID of the user address.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,m={unversionedId:"get-user-address",id:"get-user-address",title:"Get Address by Id",description:"This API is used to retrieve address using id.",source:"@site/docs/get-user-address.api.mdx",sourceDirName:".",slug:"/get-user-address",permalink:"/get-user-address",draft:!1,tags:[],version:"current",frontMatter:{id:"get-user-address",title:"Get Address by Id",description:"This API is used to retrieve address using id.",sidebar_label:"Get Address by Id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserAddress",description:"This API is used to retrieve address using id.",parameters:[{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{annotation:"Home",line:"Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"632c5839b5f554ad3047e13a"}}}}},404:{description:"Address not found error response",content:{"application/json":{example:{statusCode:404,message:"Not Found"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"get",path:"/v1/users/address/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Address by Id",description:{content:"This API is used to retrieve address using id.",type:"text/plain"},url:{path:["v1","users","address",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique ID of the user address.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Get Address",permalink:"/get-addresses"},next:{title:"Update Address",permalink:"/update-address"}},h={},y=[{value:"Get Address by Id",id:"get-address-by-id",level:2}],b={toc:y};function g(e){let{components:s,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-address-by-id"},"Get Address by Id"),(0,r.kt)("p",null,"This API is used to retrieve address using id."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(d.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "annotation": "Home",\n    "line": "Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",\n    "area": "Thiruninravur",\n    "city": "Chennai",\n    "state": "Tamil Nadu",\n    "country": "India",\n    "zip": "602024",\n    "landmark": "Near Kamban Park",\n    "coordinates": [\n      0,\n      0\n    ],\n    "default": false,\n    "_id": "632c5839b5f554ad3047e13a"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Address not found error response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 404,\n  "message": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);