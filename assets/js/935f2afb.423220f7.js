"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"ecommerceSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"pos-bytz-e-commerce-api"},{"type":"category","label":"Store","items":[{"type":"link","label":"Get Store Info","href":"/get-store-info","className":"api-method get","docId":"get-store-info"}],"collapsed":true,"collapsible":true,"href":"/category/store"},{"type":"category","label":"Categories","items":[{"type":"link","label":"Get Categories","href":"/get-categories","className":"api-method get","docId":"get-categories"}],"collapsed":true,"collapsible":true,"href":"/category/categories"},{"type":"category","label":"Items","items":[{"type":"link","label":"Get Items","href":"/get-items","className":"api-method get","docId":"get-items"}],"collapsed":true,"collapsible":true,"href":"/category/items"},{"type":"category","label":"Orders","items":[{"type":"link","label":"Get Orders","href":"/get-orders","className":"api-method get","docId":"get-orders"},{"type":"link","label":"Create Order","href":"/create-order","className":"api-method post","docId":"create-order"},{"type":"link","label":"Update Order","href":"/update-order","className":"api-method patch","docId":"update-order"}],"collapsed":true,"collapsible":true,"href":"/category/orders"},{"type":"category","label":"Carts","items":[{"type":"link","label":"Get Cart","href":"/get-cart","className":"api-method get","docId":"get-cart"},{"type":"link","label":"Delete Cart","href":"/delete-cart","className":"api-method delete","docId":"delete-cart"},{"type":"link","label":"Add Item","href":"/add-item","className":"api-method post","docId":"add-item"},{"type":"link","label":"Remove Item","href":"/remove-item","className":"api-method delete","docId":"remove-item"}],"collapsed":true,"collapsible":true,"href":"/category/carts"},{"type":"category","label":"Auth","items":[{"type":"link","label":"Customer Signup","href":"/customer-signup","className":"api-method post","docId":"customer-signup"},{"type":"link","label":"Customer Signin","href":"/customer-signin","className":"api-method post","docId":"customer-signin"},{"type":"link","label":"Otp Verification","href":"/verify-otp","className":"api-method post","docId":"verify-otp"},{"type":"link","label":"Email Verification","href":"/verify-email","className":"api-method get","docId":"verify-email"},{"type":"link","label":"Forgot password","href":"/forgot-password","className":"api-method post","docId":"forgot-password"}],"collapsed":true,"collapsible":true,"href":"/category/auth"},{"type":"category","label":"Users","items":[{"type":"link","label":"Create Address","href":"/create-address","className":"api-method post","docId":"create-address"},{"type":"link","label":"Get Address","href":"/get-addresses","className":"api-method get","docId":"get-addresses"},{"type":"link","label":"Get Address by Id","href":"/get-user-address","className":"api-method get","docId":"get-user-address"},{"type":"link","label":"Update Address","href":"/update-address","className":"api-method patch","docId":"update-address"},{"type":"link","label":"Delete Address","href":"/delete-address","className":"api-method delete","docId":"delete-address"},{"type":"link","label":"Update Profile","href":"/update-profile","className":"api-method patch","docId":"update-profile"},{"type":"link","label":"Update Email","href":"/update-email","className":"api-method post","docId":"update-email"},{"type":"link","label":"Update Mobile","href":"/update-mobile","className":"api-method post","docId":"update-mobile"},{"type":"link","label":"Update Password","href":"/update-password","className":"api-method post","docId":"update-password"},{"type":"link","label":"Update Social Data","href":"/update-user-social-data","className":"api-method patch","docId":"update-user-social-data"},{"type":"link","label":"Delete User","href":"/delete-user","className":"api-method delete","docId":"delete-user"}],"collapsed":true,"collapsible":true,"href":"/category/users"},{"type":"category","label":"Search","items":[{"type":"link","label":"Search","href":"/search","className":"api-method get","docId":"search"}],"collapsed":true,"collapsible":true,"href":"/category/search"}]},"docs":{"add-item":{"id":"add-item","title":"Add Item","description":"This API is used to add line items to the cart.","sidebar":"ecommerceSidebar"},"create-address":{"id":"create-address","title":"Create Address","description":"This API is used to  create a new address for an user.","sidebar":"ecommerceSidebar"},"create-order":{"id":"create-order","title":"Create Order","description":"This API helps you to create a new order.","sidebar":"ecommerceSidebar"},"customer-signin":{"id":"customer-signin","title":"Customer Signin","description":"This API allows customers to sign in into the store.","sidebar":"ecommerceSidebar"},"customer-signup":{"id":"customer-signup","title":"Customer Signup","description":"This API allows to sign up for a new account.","sidebar":"ecommerceSidebar"},"delete-address":{"id":"delete-address","title":"Delete Address","description":"This API is used to delete the address for an existing user.","sidebar":"ecommerceSidebar"},"delete-cart":{"id":"delete-cart","title":"Delete Cart","description":"This API is used to delete the cart. Once the cart is deleted, it can\'t be recovered.","sidebar":"ecommerceSidebar"},"delete-user":{"id":"delete-user","title":"Delete User","description":"This API is used to delete an existing user.","sidebar":"ecommerceSidebar"},"forgot-password":{"id":"forgot-password","title":"Forgot password","description":"This API is used to change the customer password.","sidebar":"ecommerceSidebar"},"get-addresses":{"id":"get-addresses","title":"Get Address","description":"This API is used to  retrieve addresses for an existing user.","sidebar":"ecommerceSidebar"},"get-cart":{"id":"get-cart","title":"Get Cart","description":"This API is used to retrieve the details of the cart.","sidebar":"ecommerceSidebar"},"get-categories":{"id":"get-categories","title":"Get Categories","description":"Use this API to retrieve a full list of Categories.","sidebar":"ecommerceSidebar"},"get-items":{"id":"get-items","title":"Get Items","description":"Use this API to retrieve all the items.","sidebar":"ecommerceSidebar"},"get-orders":{"id":"get-orders","title":"Get Orders","description":"This API is used to retrieve a full list of Orders.","sidebar":"ecommerceSidebar"},"get-store-info":{"id":"get-store-info","title":"Get Store Info","description":"Use this API to retrieve all the details of the store.","sidebar":"ecommerceSidebar"},"get-user-address":{"id":"get-user-address","title":"Get Address by Id","description":"This API is used to retrieve address using id.","sidebar":"ecommerceSidebar"},"pos-bytz-e-commerce-api":{"id":"pos-bytz-e-commerce-api","title":"PosBytz E-Commerce API","description":"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.","sidebar":"ecommerceSidebar"},"remove-item":{"id":"remove-item","title":"Remove Item","description":"This API deletes a cart line item.","sidebar":"ecommerceSidebar"},"search":{"id":"search","title":"Search","description":"This API provide enhanced search functionality in the store.","sidebar":"ecommerceSidebar"},"update-address":{"id":"update-address","title":"Update Address","description":"This API is used to update the address for an existing user.","sidebar":"ecommerceSidebar"},"update-email":{"id":"update-email","title":"Update Email","description":"This API is used to update the email address of an user.","sidebar":"ecommerceSidebar"},"update-mobile":{"id":"update-mobile","title":"Update Mobile","description":"This API is used to update the mobile number of an user.","sidebar":"ecommerceSidebar"},"update-order":{"id":"update-order","title":"Update Order","description":"This API helps you to update an existing order.","sidebar":"ecommerceSidebar"},"update-password":{"id":"update-password","title":"Update Password","description":"This API is used to update the password of an user.","sidebar":"ecommerceSidebar"},"update-profile":{"id":"update-profile","title":"Update Profile","description":"This API is used to update the basic information of an user.","sidebar":"ecommerceSidebar"},"update-user-social-data":{"id":"update-user-social-data","title":"Update Social Data","description":"This API is used to update the social media information of an user.","sidebar":"ecommerceSidebar"},"verify-email":{"id":"verify-email","title":"Email Verification","description":"This API is used to verify the email of the customer.","sidebar":"ecommerceSidebar"},"verify-otp":{"id":"verify-otp","title":"Otp Verification","description":"This API is used to verify the Mobile number or Email address of the customer.","sidebar":"ecommerceSidebar"}}}')}}]);