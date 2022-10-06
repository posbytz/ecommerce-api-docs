"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[5532],{99342:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>C,frontMatter:()=>u,metadata:()=>d,toc:()=>y});var r=t(87462),s=(t(67294),t(3905)),i=t(26389),o=t(94891),m=t(74933),l=t(47507),n=(t(24310),t(63303)),c=(t(75035),t(85162));const u={id:"categories-controller-get-categories",title:"CategoriesController_getCategories",description:"CategoriesController_getCategories",sidebar_label:"CategoriesController_getCategories",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CategoriesController_getCategories",parameters:[{name:"id",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},{name:"slug",required:!1,in:"query",schema:{type:"array",items:{type:"string"}}},{name:"parentCategoryId",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"search",required:!1,in:"query",schema:{type:"string"}},{name:"level",required:!1,in:"query",schema:{default:5,type:"number"}},{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":{"results":[{"_id":34258,"name":"Pizza","parentCategoryId":null,"slug":"pizza","parentCategories":[],"parentCategory":null,"subCategories":[],"itemsCount":4}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}'}}}},tags:["Categories"],security:[{oauth2:["categories:read"]}],description:"CategoriesController_getCategories",method:"get",path:"/v1/categories",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Categories Controller get Categories",description:{type:"text/plain"},url:{path:["v1","categories"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"id",value:""},{disabled:!1,key:"slug",value:""},{disabled:!1,key:"parentCategoryId",value:""},{disabled:!1,key:"active",value:""},{disabled:!1,key:"search",value:""},{disabled:!1,key:"level",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},p=void 0,d={unversionedId:"categories-controller-get-categories",id:"categories-controller-get-categories",title:"CategoriesController_getCategories",description:"CategoriesController_getCategories",source:"@site/docs/categories-controller-get-categories.api.mdx",sourceDirName:".",slug:"/categories-controller-get-categories",permalink:"/ecommerce-api-docs/docs/categories-controller-get-categories",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/categories-controller-get-categories.api.mdx",tags:[],version:"current",frontMatter:{id:"categories-controller-get-categories",title:"CategoriesController_getCategories",description:"CategoriesController_getCategories",sidebar_label:"CategoriesController_getCategories",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CategoriesController_getCategories",parameters:[{name:"id",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},{name:"slug",required:!1,in:"query",schema:{type:"array",items:{type:"string"}}},{name:"parentCategoryId",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},{name:"search",required:!1,in:"query",schema:{type:"string"}},{name:"level",required:!1,in:"query",schema:{default:5,type:"number"}},{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":{"results":[{"_id":34258,"name":"Pizza","parentCategoryId":null,"slug":"pizza","parentCategories":[],"parentCategory":null,"subCategories":[],"itemsCount":4}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}'}}}},tags:["Categories"],security:[{oauth2:["categories:read"]}],description:"CategoriesController_getCategories",method:"get",path:"/v1/categories",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Categories Controller get Categories",description:{type:"text/plain"},url:{path:["v1","categories"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"id",value:""},{disabled:!1,key:"slug",value:""},{disabled:!1,key:"parentCategoryId",value:""},{disabled:!1,key:"active",value:""},{disabled:!1,key:"search",value:""},{disabled:!1,key:"level",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Categories",permalink:"/ecommerce-api-docs/docs/category/categories"},next:{title:"Items",permalink:"/ecommerce-api-docs/docs/category/items"}},g={},y=[{value:"CategoriesController_getCategories",id:"categoriescontroller_getcategories",level:2}],h={toc:y};function C(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"categoriescontroller_getcategories"},"CategoriesController_getCategories"),(0,s.kt)("p",null,"CategoriesController_getCategories"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"id",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"slug",required:!1,in:"query",schema:{type:"array",items:{type:"string"}}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"parentCategoryId",required:!1,in:"query",schema:{type:"array",items:{type:"number"}}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"active",required:!1,in:"query",example:"true",schema:{enum:["true","false"],type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"search",required:!1,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"level",required:!1,in:"query",schema:{default:5,type:"number"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"page",required:!1,in:"query",schema:{default:1,type:"number"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"limit",required:!1,in:"query",schema:{default:20,type:"number"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(n.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{"statusCode":200,"data":{"results":[{"_id":34258,"name":"Pizza","parentCategoryId":null,"slug":"pizza","parentCategories":[],"parentCategory":null,"subCategories":[],"itemsCount":4}],"pagination":{"currentPage":1,"lastPage":1,"perPage":20,"totalResults":1}}}',language:"json",mdxType:"ResponseSamples"}))))))))))}C.isMDXComponent=!0}}]);