"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[2183],{79026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>T,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var o=a(87462),r=(a(67294),a(3905)),s=a(26389),i=a(94891),n=(a(74933),a(47507)),d=a(24310),l=a(63303),p=(a(75035),a(85162));const m={id:"update-mobile",title:"Update Mobile",description:"This API is used to update the mobile number of an user.",sidebar_label:"Update Mobile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateMobile",description:"This API is used to update the mobile number of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{mobile:{description:"The unique phone number of the user.",allOf:[{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}]}}}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.com",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794004",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{mobile:["mobile should not be empty"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["The mobile number has already been taken."]}}}}}},tags:["User"],security:[{oauth2:["user:read","user:write"]}],method:"post",path:"/ecommerce/v1/user/mobile/change",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{mobile:{code:"string",number:"string"}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Mobile",description:{content:"This API is used to update the mobile number of an user.",type:"text/plain"},url:{path:["ecommerce","v1","user","mobile","change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,u={unversionedId:"update-mobile",id:"update-mobile",title:"Update Mobile",description:"This API is used to update the mobile number of an user.",source:"@site/docs/update-mobile.api.mdx",sourceDirName:".",slug:"/update-mobile",permalink:"/ecommerce-api-docs/update-mobile",draft:!1,tags:[],version:"current",frontMatter:{id:"update-mobile",title:"Update Mobile",description:"This API is used to update the mobile number of an user.",sidebar_label:"Update Mobile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateMobile",description:"This API is used to update the mobile number of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{mobile:{description:"The unique phone number of the user.",allOf:[{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}]}}}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.com",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794004",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{mobile:["mobile should not be empty"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["The mobile number has already been taken."]}}}}}},tags:["User"],security:[{oauth2:["user:read","user:write"]}],method:"post",path:"/ecommerce/v1/user/mobile/change",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{mobile:{code:"string",number:"string"}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Mobile",description:{content:"This API is used to update the mobile number of an user.",type:"text/plain"},url:{path:["ecommerce","v1","user","mobile","change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Update Email",permalink:"/ecommerce-api-docs/update-email"},next:{title:"Update Password",permalink:"/ecommerce-api-docs/update-password"}},b={},h=[{value:"Update Mobile",id:"update-mobile",level:2}],y={toc:h};function T(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-mobile"},"Update Mobile"),(0,r.kt)("p",null,"This API is used to update the mobile number of an user."),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"mobile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"code",required:!0,schemaDescription:"Unique numeric country code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"number",required:!0,schemaDescription:"The valid phone number of the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 201,\n  "data": {\n    "_id": "632c34752269f12c57952273",\n    "email": {\n      "id": "harish@bytize.com",\n      "token": "e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",\n      "verified": false\n    },\n    "mobile": {\n      "code": "+91",\n      "number": "9962794004",\n      "verified": false\n    },\n    "createdAt": "2022-09-22T10:09:14.205Z",\n    "deletedAt": null,\n    "addresses": [],\n    "__v": 0,\n    "otp": {\n      "code": 214524,\n      "createdAt": "2022-09-22T10:09:57.544Z"\n    },\n    "dob": "1993-07-05T00:00:00.000Z",\n    "gender": "Male",\n    "name": "Harish Mohan"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation error response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "mobile": [\n      "mobile should not be empty"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation error response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 422,\n  "errors": {\n    "email": [\n      "The mobile number has already been taken."\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);