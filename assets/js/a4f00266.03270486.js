"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[7268],{21479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>y});var r=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),i=a(74933),c=a(47507),m=(a(24310),a(63303)),l=(a(75035),a(85162));const d={id:"merchants-controller-get-merchants",title:"MerchantsController_getMerchants",description:"MerchantsController_getMerchants",sidebar_label:"MerchantsController_getMerchants",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"MerchantsController_getMerchants",parameters:[{name:"domain",required:!1,in:"query",schema:{type:"string"}},{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":{"results":[{"_id":1171,"active":true,"business":{"name":"naveen+2772","brandName":"naveen","category":{"name":"General","slug":"general"},"type":{"name":"Grocery","slug":"grocery"},"email":{"id":"naveen+2772@bytize.in","verified":true},"mobile":{"code":91,"number":9988855000,"verified":true},"address":{"annotation":"other","line":"123, qwe","city":"saudi","state":"saudi","country":"India","zip":"600102","default":false},"timings":[{"slots":[]}],"cloudKitchen":false},"charges":[],"code":"M0001171","countryCode":"IN","domains":[{"domain":"localhost","type":"","active":true}],"languageCode":"en","name":"naveen+2772","paymentMethods":[],"platforms":[],"settings":{},"subscription":{"slug":"premium","name":"Premium","description":"","products":[],"period":"year"},"timezone":"Asia/Kolkata"}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}'}}}},tags:["Merchants"],security:[{oauth2:["merchants:read"]}],description:"MerchantsController_getMerchants",method:"get",path:"/v1/merchants",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Merchants Controller get Merchants",description:{type:"text/plain"},url:{path:["v1","merchants"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"domain",value:""},{disabled:!1,key:"active",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},u=void 0,p={unversionedId:"merchants-controller-get-merchants",id:"merchants-controller-get-merchants",title:"MerchantsController_getMerchants",description:"MerchantsController_getMerchants",source:"@site/docs/merchants-controller-get-merchants.api.mdx",sourceDirName:".",slug:"/merchants-controller-get-merchants",permalink:"/ecommerce-api-docs/docs/merchants-controller-get-merchants",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/merchants-controller-get-merchants.api.mdx",tags:[],version:"current",frontMatter:{id:"merchants-controller-get-merchants",title:"MerchantsController_getMerchants",description:"MerchantsController_getMerchants",sidebar_label:"MerchantsController_getMerchants",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"MerchantsController_getMerchants",parameters:[{name:"domain",required:!1,in:"query",schema:{type:"string"}},{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":{"results":[{"_id":1171,"active":true,"business":{"name":"naveen+2772","brandName":"naveen","category":{"name":"General","slug":"general"},"type":{"name":"Grocery","slug":"grocery"},"email":{"id":"naveen+2772@bytize.in","verified":true},"mobile":{"code":91,"number":9988855000,"verified":true},"address":{"annotation":"other","line":"123, qwe","city":"saudi","state":"saudi","country":"India","zip":"600102","default":false},"timings":[{"slots":[]}],"cloudKitchen":false},"charges":[],"code":"M0001171","countryCode":"IN","domains":[{"domain":"localhost","type":"","active":true}],"languageCode":"en","name":"naveen+2772","paymentMethods":[],"platforms":[],"settings":{},"subscription":{"slug":"premium","name":"Premium","description":"","products":[],"period":"year"},"timezone":"Asia/Kolkata"}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}'}}}},tags:["Merchants"],security:[{oauth2:["merchants:read"]}],description:"MerchantsController_getMerchants",method:"get",path:"/v1/merchants",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Merchants Controller get Merchants",description:{type:"text/plain"},url:{path:["v1","merchants"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"domain",value:""},{disabled:!1,key:"active",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Merchants",permalink:"/ecommerce-api-docs/docs/category/merchants"},next:{title:"Categories",permalink:"/ecommerce-api-docs/docs/category/categories"}},h={},y=[{value:"MerchantsController_getMerchants",id:"merchantscontroller_getmerchants",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"merchantscontroller_getmerchants"},"MerchantsController_getMerchants"),(0,s.kt)("p",null,"MerchantsController_getMerchants"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"domain",required:!1,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},mdxType:"ParamsItem"}),(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{"statusCode":200,"data":{"results":[{"_id":1171,"active":true,"business":{"name":"naveen+2772","brandName":"naveen","category":{"name":"General","slug":"general"},"type":{"name":"Grocery","slug":"grocery"},"email":{"id":"naveen+2772@bytize.in","verified":true},"mobile":{"code":91,"number":9988855000,"verified":true},"address":{"annotation":"other","line":"123, qwe","city":"saudi","state":"saudi","country":"India","zip":"600102","default":false},"timings":[{"slots":[]}],"cloudKitchen":false},"charges":[],"code":"M0001171","countryCode":"IN","domains":[{"domain":"localhost","type":"","active":true}],"languageCode":"en","name":"naveen+2772","paymentMethods":[],"platforms":[],"settings":{},"subscription":{"slug":"premium","name":"Premium","description":"","products":[],"period":"year"},"timezone":"Asia/Kolkata"}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);