"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[635],{73740:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>C,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var r=o(87462),a=(o(67294),o(3905)),s=o(26389),i=o(94891),n=o(74933),c=o(47507),u=(o(24310),o(63303)),l=(o(75035),o(85162));const d={id:"countries-controller-get-countries",title:"CountriesController_getCountries",description:"CountriesController_getCountries",sidebar_label:"CountriesController_getCountries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CountriesController_getCountries",parameters:[{name:"search",required:!1,in:"query",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":[{"name":"India","isoCode":"IN","flag":"\ud83c\uddee\ud83c\uddf3","phonecode":"91","currency":"INR","latitude":"20.00000000","longitude":"77.00000000","timezones":[{"zoneName":"Asia/Kolkata","gmtOffset":19800,"gmtOffsetName":"UTC+05:30","abbreviation":"IST","tzName":"Indian Standard Time"}]}]}'}}}},tags:["Countries"],security:[{oauth2:["countries:read"]}],description:"CountriesController_getCountries",method:"get",path:"/v1/countries",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Countries Controller get Countries",description:{type:"text/plain"},url:{path:["v1","countries"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"search",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},m=void 0,p={unversionedId:"countries-controller-get-countries",id:"countries-controller-get-countries",title:"CountriesController_getCountries",description:"CountriesController_getCountries",source:"@site/docs/countries-controller-get-countries.api.mdx",sourceDirName:".",slug:"/countries-controller-get-countries",permalink:"/ecommerce-api-docs/docs/countries-controller-get-countries",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/countries-controller-get-countries.api.mdx",tags:[],version:"current",frontMatter:{id:"countries-controller-get-countries",title:"CountriesController_getCountries",description:"CountriesController_getCountries",sidebar_label:"CountriesController_getCountries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CountriesController_getCountries",parameters:[{name:"search",required:!1,in:"query",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":[{"name":"India","isoCode":"IN","flag":"\ud83c\uddee\ud83c\uddf3","phonecode":"91","currency":"INR","latitude":"20.00000000","longitude":"77.00000000","timezones":[{"zoneName":"Asia/Kolkata","gmtOffset":19800,"gmtOffsetName":"UTC+05:30","abbreviation":"IST","tzName":"Indian Standard Time"}]}]}'}}}},tags:["Countries"],security:[{oauth2:["countries:read"]}],description:"CountriesController_getCountries",method:"get",path:"/v1/countries",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Countries Controller get Countries",description:{type:"text/plain"},url:{path:["v1","countries"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"search",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Countries",permalink:"/ecommerce-api-docs/docs/category/countries"},next:{title:"CountriesController_getCountry",permalink:"/ecommerce-api-docs/docs/countries-controller-get-country"}},C={},h=[{value:"CountriesController_getCountries",id:"countriescontroller_getcountries",level:2}],g={toc:h};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"countriescontroller_getcountries"},"CountriesController_getCountries"),(0,a.kt)("p",null,"CountriesController_getCountries"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"search",required:!1,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Success response")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{"statusCode":200,"data":[{"name":"India","isoCode":"IN","flag":"\ud83c\uddee\ud83c\uddf3","phonecode":"91","currency":"INR","latitude":"20.00000000","longitude":"77.00000000","timezones":[{"zoneName":"Asia/Kolkata","gmtOffset":19800,"gmtOffsetName":"UTC+05:30","abbreviation":"IST","tzName":"Indian Standard Time"}]}]}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);