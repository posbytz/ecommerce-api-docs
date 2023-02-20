"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[5744],{66168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),o=a(26389),s=a(94891),i=a(74933),d=a(47507),p=a(24310),l=a(63303),m=(a(75035),a(85162));const u={id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",sidebar_label:"Update Order",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateOrder",description:"This API helps you to update an existing order.",parameters:[{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{orderStatus:{type:"string",description:"Status of the Order.",enum:["pending","complete"]},payments:{type:"array",items:{type:"object",properties:{paymentMethodId:{type:"number",description:"Unique identifier of the Payment method used."},status:{type:"string",description:"Status of the payment.",enum:["pending","complete","refunded"]}},required:["paymentMethodId","status"]}}},required:["orderStatus","payments"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"63f0d2ed51f4efba724cd79c",storeId:1171,locationId:1364,userId:"63775bf2622952337246312a",type:"pickup",status:"complete",items:[{variation:{_id:352183,name:"Tomato Basil Penne Pasta"},item:{_id:343468,name:"Penne Pasta"},category:{_id:34259,name:"Pasta"},inventoryId:363731,name:"Tomato Basil Penne Pasta",image:"https://s3.amazonaws.com/posbytz-qa/items/0a5c76d2-934e-42d7-83ab-77a9d8c78fe4-large.jpg",sku:"777785553444070",quantity:1,price:180,mrp:0,groups:[],subtotal:180,tax:0,taxes:[],discount:0,discounts:[],total:180,_id:"63f0d29551f4efba724cd733"}],bill:{subtotal:180,tax:0,taxes:[],discount:0,discounts:[],charge:0,charges:[],roundOff:0,total:180},payments:[{paymentMethodId:18,name:"Cash On Delivery",slug:"cod",amount:180,status:"complete"}],billingAddress:{annotation:"Home",line:"Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"63526083733e9dc27c656f89"},createdAt:"2023-02-18T13:30:21.105Z"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,message:"Bad Request"}}}}},tags:["Orders"],security:[{oauth2:["order:read","order:write"]}],method:"patch",path:"/ecommerce/v1/orders/{orderId}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{orderStatus:"pending",payments:[{paymentMethodId:0,status:"pending"}]},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Order",description:{content:"This API helps you to update an existing order.",type:"text/plain"},url:{path:["ecommerce","v1","orders",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique id of the order.",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,y={unversionedId:"update-order",id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",source:"@site/docs/update-order.api.mdx",sourceDirName:".",slug:"/update-order",permalink:"/update-order",draft:!1,tags:[],version:"current",frontMatter:{id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",sidebar_label:"Update Order",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateOrder",description:"This API helps you to update an existing order.",parameters:[{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{orderStatus:{type:"string",description:"Status of the Order.",enum:["pending","complete"]},payments:{type:"array",items:{type:"object",properties:{paymentMethodId:{type:"number",description:"Unique identifier of the Payment method used."},status:{type:"string",description:"Status of the payment.",enum:["pending","complete","refunded"]}},required:["paymentMethodId","status"]}}},required:["orderStatus","payments"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"63f0d2ed51f4efba724cd79c",storeId:1171,locationId:1364,userId:"63775bf2622952337246312a",type:"pickup",status:"complete",items:[{variation:{_id:352183,name:"Tomato Basil Penne Pasta"},item:{_id:343468,name:"Penne Pasta"},category:{_id:34259,name:"Pasta"},inventoryId:363731,name:"Tomato Basil Penne Pasta",image:"https://s3.amazonaws.com/posbytz-qa/items/0a5c76d2-934e-42d7-83ab-77a9d8c78fe4-large.jpg",sku:"777785553444070",quantity:1,price:180,mrp:0,groups:[],subtotal:180,tax:0,taxes:[],discount:0,discounts:[],total:180,_id:"63f0d29551f4efba724cd733"}],bill:{subtotal:180,tax:0,taxes:[],discount:0,discounts:[],charge:0,charges:[],roundOff:0,total:180},payments:[{paymentMethodId:18,name:"Cash On Delivery",slug:"cod",amount:180,status:"complete"}],billingAddress:{annotation:"Home",line:"Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"63526083733e9dc27c656f89"},createdAt:"2023-02-18T13:30:21.105Z"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,message:"Bad Request"}}}}},tags:["Orders"],security:[{oauth2:["order:read","order:write"]}],method:"patch",path:"/ecommerce/v1/orders/{orderId}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{orderStatus:"pending",payments:[{paymentMethodId:0,status:"pending"}]},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Order",description:{content:"This API helps you to update an existing order.",type:"text/plain"},url:{path:["ecommerce","v1","orders",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique id of the order.",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Create Order",permalink:"/create-order"},next:{title:"Reorder Items",permalink:"/reorder-items"}},h={},g=[{value:"Update Order",id:"update-order",level:2}],b={toc:g};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"update-order"},"Update Order"),(0,n.kt)("p",null,"This API helps you to update an existing order."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(i.Z,{className:"paramsItem",param:{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"orderStatus",required:!0,schemaDescription:"Status of the Order.",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `complete`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"payments"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"paymentMethodId",required:!0,schemaDescription:"Unique identifier of the Payment method used.",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!0,schemaDescription:"Status of the payment.",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `complete`, `refunded`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Success response")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "_id": "63f0d2ed51f4efba724cd79c",\n    "storeId": 1171,\n    "locationId": 1364,\n    "userId": "63775bf2622952337246312a",\n    "type": "pickup",\n    "status": "complete",\n    "items": [\n      {\n        "variation": {\n          "_id": 352183,\n          "name": "Tomato Basil Penne Pasta"\n        },\n        "item": {\n          "_id": 343468,\n          "name": "Penne Pasta"\n        },\n        "category": {\n          "_id": 34259,\n          "name": "Pasta"\n        },\n        "inventoryId": 363731,\n        "name": "Tomato Basil Penne Pasta",\n        "image": "https://s3.amazonaws.com/posbytz-qa/items/0a5c76d2-934e-42d7-83ab-77a9d8c78fe4-large.jpg",\n        "sku": "777785553444070",\n        "quantity": 1,\n        "price": 180,\n        "mrp": 0,\n        "groups": [],\n        "subtotal": 180,\n        "tax": 0,\n        "taxes": [],\n        "discount": 0,\n        "discounts": [],\n        "total": 180,\n        "_id": "63f0d29551f4efba724cd733"\n      }\n    ],\n    "bill": {\n      "subtotal": 180,\n      "tax": 0,\n      "taxes": [],\n      "discount": 0,\n      "discounts": [],\n      "charge": 0,\n      "charges": [],\n      "roundOff": 0,\n      "total": 180\n    },\n    "payments": [\n      {\n        "paymentMethodId": 18,\n        "name": "Cash On Delivery",\n        "slug": "cod",\n        "amount": 180,\n        "status": "complete"\n      }\n    ],\n    "billingAddress": {\n      "annotation": "Home",\n      "line": "Plot No 52, Balarishna Nagar, 1st Street, Thiruninravur",\n      "area": "Thiruninravur",\n      "city": "Chennai",\n      "state": "Tamil Nadu",\n      "country": "India",\n      "zip": "602024",\n      "landmark": "Near Kamban Park",\n      "coordinates": [\n        0,\n        0\n      ],\n      "default": false,\n      "_id": "63526083733e9dc27c656f89"\n    },\n    "createdAt": "2023-02-18T13:30:21.105Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation error response")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "statusCode": 400,\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);