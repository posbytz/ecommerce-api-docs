"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[2013],{80303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(74933),d=a(47507),l=(a(24310),a(63303)),m=(a(75035),a(85162));const p={id:"verify-email",title:"Email Verification",description:"This API is used to verify the email of the customer.",sidebar_label:"Email Verification",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"verifyEmail",description:"This API is used to verify the email of the customer.",parameters:[{name:"userId",required:!0,in:"query",description:"The unique ID of the user.",schema:{type:"string"}},{name:"token",required:!0,in:"query",description:"The verification token send via email address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{userId:["userId must be a mongodb id"],token:["token must be a string"]},message:"Bad Request"}}}},401:{description:"Invalid token error response",content:{"application/json":{example:{statusCode:401,message:"Invalid token",error:"Unauthorized"}}}}},tags:["Auth"],security:[{oauth2:["user:read","user:write"]}],method:"get",path:"/ecommerce/v1/auth/email/verify",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Email Verification",description:{content:"This API is used to verify the email of the customer.",type:"text/plain"},url:{path:["ecommerce","v1","auth","email","verify"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The unique ID of the user.",type:"text/plain"},key:"userId",value:""},{disabled:!1,description:{content:"(Required) The verification token send via email address.",type:"text/plain"},key:"token",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,c={unversionedId:"verify-email",id:"verify-email",title:"Email Verification",description:"This API is used to verify the email of the customer.",source:"@site/docs/verify-email.api.mdx",sourceDirName:".",slug:"/verify-email",permalink:"/verify-email",draft:!1,tags:[],version:"current",frontMatter:{id:"verify-email",title:"Email Verification",description:"This API is used to verify the email of the customer.",sidebar_label:"Email Verification",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"verifyEmail",description:"This API is used to verify the email of the customer.",parameters:[{name:"userId",required:!0,in:"query",description:"The unique ID of the user.",schema:{type:"string"}},{name:"token",required:!0,in:"query",description:"The verification token send via email address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{userId:["userId must be a mongodb id"],token:["token must be a string"]},message:"Bad Request"}}}},401:{description:"Invalid token error response",content:{"application/json":{example:{statusCode:401,message:"Invalid token",error:"Unauthorized"}}}}},tags:["Auth"],security:[{oauth2:["user:read","user:write"]}],method:"get",path:"/ecommerce/v1/auth/email/verify",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Email Verification",description:{content:"This API is used to verify the email of the customer.",type:"text/plain"},url:{path:["ecommerce","v1","auth","email","verify"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The unique ID of the user.",type:"text/plain"},key:"userId",value:""},{disabled:!1,description:{content:"(Required) The verification token send via email address.",type:"text/plain"},key:"token",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Otp Verification",permalink:"/verify-otp"},next:{title:"Forgot password",permalink:"/forgot-password"}},h={},y=[{value:"Email Verification",id:"email-verification",level:2}],v={toc:y};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"email-verification"},"Email Verification"),(0,s.kt)("p",null,"This API is used to verify the email of the customer."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"userId",required:!0,in:"query",description:"The unique ID of the user.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"token",required:!0,in:"query",description:"The verification token send via email address.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "statusCode": 200,\n  "message": "Success"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation error response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "userId": [\n      "userId must be a mongodb id"\n    ],\n    "token": [\n      "token must be a string"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid token error response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "statusCode": 401,\n  "message": "Invalid token",\n  "error": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);