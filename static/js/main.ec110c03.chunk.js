(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{13:function(e,t,c){},39:function(e,t,c){},59:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(32),r=c.n(s),i=(c(39),c(3)),o=c(6),j=c(2),l=c.n(j),u=c(5),d=c(4),b=c(19),h=c(8),O=c.n(h),p=(c(59),c(0));var m=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(1),o=Object(d.a)(r,2),j=o[0],h=o[1],m=((new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),"https://fakestoreapi.com/products/"+e.id),x=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(m);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()})),Object(p.jsx)("div",{class:"Modal",children:Object(p.jsxs)("div",{class:"Modal_content",children:[Object(p.jsx)("span",{onClick:function(){e.toggle()},children:Object(p.jsx)(b.b,{className:"Close"})}),Object(p.jsxs)("div",{className:"Info",children:[Object(p.jsxs)("div",{className:"ImgBlock",children:[Object(p.jsx)("img",{src:a.image,className:"QuickImg",alt:""}),Object(p.jsx)("button",{className:"AddToCart",onClick:function(){},children:"Add to cart"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:a.title}),Object(p.jsxs)("span",{className:"QuickPrice",children:[a.price,"$"]}),("men's clothing"===a.category||"women's clothing"===a.category)&&Object(p.jsx)("div",{className:"Size",children:Object(p.jsxs)("label",{children:["Pick your Size",Object(p.jsx)("br",{}),Object(p.jsxs)("select",{children:[Object(p.jsx)("option",{value:"small",children:"Small"}),Object(p.jsx)("option",{value:"medium",children:"Medium"}),Object(p.jsx)("option",{value:"large",children:"Large"})]})]})}),Object(p.jsx)("div",{className:"QuantLabel",children:Object(p.jsxs)("label",{children:["Quantity",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"number",min:"1",max:"5",className:"Quantity",value:j,onChange:function(e){""===e.target.value?h(""):e.target.value>5?(h(5),alert("You can't buy more than 5 items")):e.target.value<1?(h(1),alert("You can't buy less than 1 item")):h(e.target.value)}})]})}),Object(p.jsx)(i.b,{children:Object(p.jsx)("span",{children:"See more details"})})]})]})]})})},x=m,f=(c(66),c(8));var v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=0,r=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://fakestoreapi.com/carts/user/3");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()})),Object(p.jsxs)("div",{className:"Header",children:[Object(p.jsx)(i.b,{to:"/eCommerce",children:Object(p.jsx)("button",{className:"LogoButton",children:"N O U S"})}),Object(p.jsx)(i.b,{to:"/contact",className:"HeaderPages",children:Object(p.jsx)("span",{children:"Contact"})}),Object(p.jsx)(i.b,{to:"/about",className:"HeaderPages",children:Object(p.jsx)("span",{children:"About"})}),Object(p.jsx)(i.b,{to:"/men",className:"HeaderPages",children:Object(p.jsx)("span",{children:"Men"})}),Object(p.jsx)(i.b,{to:"/women",className:"HeaderPages",children:Object(p.jsx)("span",{children:"Women"})}),Object(p.jsx)(i.b,{to:"/electronics",className:"HeaderPages",children:Object(p.jsx)("span",{children:"Electronics"})}),Object(p.jsx)(i.b,{to:"/jewelery",className:"HeaderPages",children:Object(p.jsx)("span",{children:"Jewelery"})}),Object(p.jsx)(i.b,{to:"/login",className:"Login",children:Object(p.jsx)("span",{children:"Login"})}),Object(p.jsxs)(i.b,{to:"/cart",className:"CartIcon",children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{})}),Object(p.jsx)("span",{className:"Badge",children:c.map((function(e){s+=e.products.length}))&&s})]})]})},g=v,N=c(16);c(67);var y=function(){return Object(p.jsxs)("div",{className:"Footer",children:[Object(p.jsx)(N.a,{to:"/contact#top",className:"FooterSections",children:Object(p.jsx)("span",{children:"Contact us"})}),Object(p.jsx)(N.a,{to:"/about#top",className:"FooterSections",children:Object(p.jsx)("span",{children:"About"})}),Object(p.jsx)(N.a,{to:"/policy#shipping",className:"FooterSections",children:Object(p.jsx)("span",{children:"Shipping Policy"})}),Object(p.jsx)(N.a,{to:"/policy#return",className:"FooterSections",children:Object(p.jsx)("span",{children:"Return Policy"})})]})};c(68);var w=function(){return Object(p.jsx)("div",{className:"Poster",children:Object(p.jsxs)("div",{className:"Poster_content",children:[Object(p.jsxs)("p",{children:["FREE SHIPPING",Object(p.jsx)("p",{children:"ON ORDERS OVER $50 - USE COUPON CODE OVER50"})]}),Object(p.jsx)(i.b,{to:"/women",className:"PosterButtons",children:Object(p.jsx)("span",{children:"Women"})}),Object(p.jsx)(i.b,{to:"/men",className:"PosterButtons",children:Object(p.jsx)("span",{children:"Men"})}),Object(p.jsx)(i.b,{to:"/jewelery",className:"PosterButtons",children:Object(p.jsx)("span",{children:"Jewelery"})}),Object(p.jsx)(i.b,{to:"/electronics",className:"PosterButtons",children:Object(p.jsx)("span",{children:"Electronics"})})]})})};c(69);var S=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r="https://fakestoreapi.com/products/"+e.id,o=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(r);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()})),Object(p.jsxs)("div",{className:"ProductBlock",children:["none"===e.category?Object(p.jsxs)("div",{className:"ImageBlock",onClick:function(){e.handlePopup(e.id)},children:[Object(p.jsx)("img",{src:a.image,alt:"",className:"Image"}),Object(p.jsx)("div",{className:"HoverText",children:Object(p.jsx)("p",{children:"Quick View"})})]}):Object(p.jsx)("div",{className:"ImageBlockWithoutHover",children:Object(p.jsx)(i.b,{to:{pathname:"/details",productProps:{id:e.id}},children:Object(p.jsx)("img",{src:a.image,alt:"",className:"Image"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"Title",children:a.title}),Object(p.jsxs)("p",{className:"Price",children:[a.price,"$"]})]})]})},P=S,k=c.p+"static/media/1.e3752eb6.jpg",C=c.p+"static/media/2.8d1e9678.jpg",E=c.p+"static/media/3.7446e798.jpg",I=(c(13),c(8));var B=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),j=o[0],b=o[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),m=O[0],f=O[1],v=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("https://fakestoreapi.com/products?limit=6");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){b(!j),f(e)};return Object(n.useEffect)((function(){v()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)(w,{}),Object(p.jsxs)("div",{className:"Images",children:[Object(p.jsx)("img",{alt:"",src:k}),Object(p.jsx)("img",{alt:"",src:C}),Object(p.jsx)("img",{alt:"",src:E})]}),Object(p.jsx)("h3",{children:"PRODUCTS"}),Object(p.jsxs)("div",{className:"Product",children:[a&&a.map((function(e){return Object(p.jsx)(P,{id:e.id,handlePopup:g,category:"none"})})),j&&Object(p.jsx)(x,{toggle:g,id:m})]}),Object(p.jsxs)("div",{className:"ShopAllButtonContainer",children:[Object(p.jsx)(i.b,{to:"/shoppingAll",className:"ShopAllButton",children:Object(p.jsx)("span",{children:"Shop All"})}),Object(p.jsx)(i.b,{to:"/shoppingAll",className:"ArrowButton",children:Object(p.jsx)("span",{children:">"})})]})]})};var A=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://fakestoreapi.com/products/category/men's clothing");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Men's Clothing"}),Object(p.jsx)("div",{className:"Product",children:c&&c.map((function(e){return Object(p.jsx)(P,{id:e.id,category:"men"})}))})]})},F=c(8);var T=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("https://fakestoreapi.com/products/category/women's clothing");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Women's Clothing"}),Object(p.jsx)("div",{className:"Product",children:c&&c.map((function(e){return Object(p.jsx)(P,{id:e.id,category:"women"})}))})]})},H=c(8);var R=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("https://fakestoreapi.com/products/category/jewelery");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Jewelery"}),Object(p.jsx)("div",{className:"Product",children:c&&c.map((function(e){return Object(p.jsx)(P,{id:e.id,category:"jewelery"})}))})]})};var M=function(){return Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Our Story"}),Object(p.jsx)("p",{className:"Paragraphs",children:"NOUS is an international B2C fast fashion brand. The company mainly focuses on women's wear, but it also offers men's apparel, jewelery and electronics. NOUS mainly targets Europe, America, Australia, and the Middle East along with other consumer markets. The brand was founded in October 2008, and since then it has upheld the philosophy that \"everyone can enjoy the beauty of fashion.\" Its business covers more than 220 countries and regions around the world."})]})};var Q=function(){return Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Contact Us"}),Object(p.jsxs)("div",{className:"ContactInfo",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("h4",{children:"Flagship Store"}),"500 Terry Francois St.",Object(p.jsx)("br",{}),"San Francisco, CA 94158",Object(p.jsx)("br",{}),"123-456-7890"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("h4",{children:"Opening Hours"}),"Mon - Fri: 7am - 10pm",Object(p.jsx)("br",{}),"Saturday: 8am - 10pm",Object(p.jsx)("br",{}),"Sunday: 8am - 11pm"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("h4",{children:"Customer Service"}),"1-800-000-000",Object(p.jsx)("br",{}),"123-456-7890",Object(p.jsx)("br",{}),"info@my-domain.com"]})]})]})};var L=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://fakestoreapi.com/products/category/electronics");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Electronics"}),Object(p.jsx)("div",{className:"Product",children:c&&c.map((function(e){return Object(p.jsx)(P,{id:e.id,category:"electronics"})}))})]})};c(70);var D=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r="https://fakestoreapi.com/products/"+e.id,o=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(r);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()})),Object(p.jsxs)("div",{className:"CartProductBlock",children:[Object(p.jsx)("div",{className:"CartImageBlockWithoutHover",children:Object(p.jsx)("img",{src:a.image,alt:"",className:"CartImage"})}),Object(p.jsx)("div",{className:"TitleBlock",children:Object(p.jsx)(i.b,{to:{pathname:"/details",productProps:{id:e.id}},className:"CartTitle",children:Object(p.jsx)("p",{children:a.title})})}),Object(p.jsx)("div",{className:"Total",children:Object(p.jsxs)("p",{className:"Amount",children:[e.quantity," item",Object(p.jsx)("br",{}),a.price,"$"]})}),void e.total(e.quantity,a.price)]})},Y=D,U=c(8);var $=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(d.a)(s,2),i=r[0],o=r[1],j=0,b=function(e,t){o(j+=e*t)},h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("https://fakestoreapi.com/carts/user/3");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()})),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Cart"}),Object(p.jsx)("div",{children:c&&c.map((function(e){return e.products.map((function(e){return Object(p.jsx)(Y,{id:e.productId,quantity:e.quantity,total:b})}))}))}),Object(p.jsxs)("div",{className:"Total",children:["Total = ",i,"$"]})]})};var J=function(){return Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsxs)("div",{id:"return",children:[Object(p.jsx)("h3",{children:"Returns Policy"}),Object(p.jsxs)("p",{className:"Paragraphs",children:["You have 30 calendar days to return an item from the date you received it.",Object(p.jsx)("br",{}),"To be eligible for a return, your item must be unused and in the same condition that you received it.",Object(p.jsx)("br",{}),"Your item must be in the original packaging.",Object(p.jsx)("br",{}),"Your item needs to have the receipt or proof of purchase."]})]}),Object(p.jsxs)("div",{id:"shipping",children:[Object(p.jsx)("h3",{children:"Shipping Policy"}),Object(p.jsxs)("p",{className:"Paragraphs",children:["FREE SHIPPING ON ORDERS OVER $50",Object(p.jsx)("br",{}),"You will be responsible for paying for your own shipping costs for returning your item.",Object(p.jsx)("br",{}),"Shipping costs are nonrefundable.",Object(p.jsx)("br",{}),"If you receive a refund, the cost of return shipping will be deducted from your refund."]})]})]})};var W=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://fakestoreapi.com/products");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h3",{children:"Shopping All"}),Object(p.jsx)("div",{className:"Product",children:c&&c.map((function(e){return Object(p.jsx)(P,{name:e.title,price:e.price,photo:e.image,id:e.id})}))})]})},q=c(8);var z=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(1),i=Object(d.a)(r,2),o=i[0],j=i[1],b="https://fakestoreapi.com/products/"+e.location.productProps.id,h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get(b);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()})),Object(p.jsx)("div",{className:"Container",children:Object(p.jsxs)("div",{className:"Info",children:[Object(p.jsxs)("div",{className:"ImgBlock",children:[Object(p.jsx)("img",{src:a.image,className:"QuickImg",alt:""}),Object(p.jsxs)("div",{className:"Paragraphs",children:[Object(p.jsx)("h4",{children:"Product description"}),a.description]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:a.title}),Object(p.jsxs)("span",{className:"QuickPrice",children:[a.price,"$"]}),("men's clothing"===a.category||"women's clothing"===a.category)&&Object(p.jsx)("div",{className:"Size",children:Object(p.jsxs)("label",{children:["Pick your Size",Object(p.jsx)("br",{}),Object(p.jsxs)("select",{children:[Object(p.jsx)("option",{value:"small",children:"Small"}),Object(p.jsx)("option",{value:"medium",children:"Medium"}),Object(p.jsx)("option",{value:"large",children:"Large"})]})]})}),Object(p.jsx)("div",{className:"QuantLabel",children:Object(p.jsxs)("label",{children:["Quantity",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"number",min:"1",max:"5",value:o,className:"Quantity",onChange:function(e){""===e.target.value?j(""):e.target.value>5?(j(5),alert("You can't buy more than 5 items")):e.target.value<1?(j(1),alert("You can't buy less than 1 item")):j(e.target.value)}})]})}),Object(p.jsx)("button",{className:"AddToCart",onClick:function(){},children:"Add to cart"})]})]})})};var V=function(){return Object(p.jsx)("div",{className:"Container",children:Object(p.jsx)("h3",{children:"Login Page"})})};var G=function(){return Object(p.jsxs)(i.a,{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/eCommerce",exact:!0,component:B}),Object(p.jsx)(o.a,{path:"/men",component:A}),Object(p.jsx)(o.a,{path:"/women",component:T}),Object(p.jsx)(o.a,{path:"/jewelery",component:R}),Object(p.jsx)(o.a,{path:"/electronics",component:L}),Object(p.jsx)(o.a,{path:"/shoppingAll",component:W}),Object(p.jsx)(o.a,{path:"/about",component:M}),Object(p.jsx)(o.a,{path:"/contact",component:Q}),Object(p.jsx)(o.a,{path:"/cart",component:$}),Object(p.jsx)(o.a,{path:"/policy",component:J}),Object(p.jsx)(o.a,{path:"/login",component:V}),Object(p.jsx)(o.a,{path:"/details",component:z})]}),Object(p.jsx)(y,{})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),_()}},[[71,1,2]]]);
//# sourceMappingURL=main.ec110c03.chunk.js.map