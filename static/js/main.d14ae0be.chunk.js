(window.webpackJsonpmapmybox=window.webpackJsonpmapmybox||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(29),a(3)),i=(a(6),Object(n.createContext)()),s=function(e){var t=e.feature,a=Object(n.useContext)(i).setPopup;return r.a.createElement(o.b,{coordinates:[t.center[0],t.center[1]],onClick:function(){a(t)}})},u=Object(o.d)({accessToken:"pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ"}),p=function(){var e=Object(n.useContext)(i),t=e.places,a=e.getPlaces,c=e.popupData;Object(n.useEffect)(function(){a()},[]);var l=null!==t&&t.features.map(function(e){return r.a.createElement(s,{feature:e,key:e.id,coordinates:e.center})});return r.a.createElement("div",null,r.a.createElement(u,{style:"mapbox://styles/mapbox/streets-v9",center:[28.4685,49.2344],containerStyle:{height:"100vh",width:"100vw"}},null!==c&&r.a.createElement(o.c,{anchor:"bottom",offset:10,coordinates:c.location},r.a.createElement("h5",null,c.text),r.a.createElement("br",null),r.a.createElement("h6",null,c.name)),r.a.createElement(o.a,{type:"symbol",id:"marker",layout:{"icon-image":"restaurant-15"}},l)))},m=function(){var e=Object(n.useContext)(i).setVisibility;return r.a.createElement("div",{className:"sidebar-button",onClick:function(){e()}},r.a.createElement("i",{className:"fas fa-lg fa-search-location"}))},b=function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Filter places",className:"search-input"})))},f=function(e){var t=e.feature,a=e.name,c=Object(n.useContext)(i).setPopup;return r.a.createElement("p",{className:"output-item",onClick:function(){c(t),console.log(t)}},a)},y=function(){var e=Object(n.useContext)(i),t=e.isVisible,a=e.places;return r.a.createElement("div",{className:t?"sidebar sidebar-visible":"sidebar"},r.a.createElement("h3",null,"Vinnytsia"),r.a.createElement(b,null),null!==a&&a.features.map(function(e){return r.a.createElement(f,{feature:e,key:e.id,name:e.text})}))},E=a(9),d=a.n(E),v=a(20),O=a(23),h=a(21),j=a.n(h),x=a(22);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g=function(e,t){switch(t.type){case"GET_PLACES":return I({},e,{places:t.payload});case"SET_VISIBILITY":return I({},e,{isVisible:t.payload});case"SET_POPUP":return I({},e,{popupData:t.payload})}},w=function(e){var t=Object(n.useReducer)(g,{places:null,isVisible:!1,popupData:null}),a=Object(O.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(v.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()("https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=28.4685,%2049.2344&bbox=27.37442,48.06551,30.023758,49.889038&limit=10&access_token=pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ");case 2:t=e.sent,l({type:"GET_PLACES",payload:t.data});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(i.Provider,{value:{places:c.places,isVisible:c.isVisible,popupData:c.popupData,getPlaces:o,setVisibility:function(){c.isVisible?l({type:"SET_VISIBILITY",payload:!1}):l({type:"SET_VISIBILITY",payload:!0})},setPopup:function(e){l({type:"SET_POPUP",payload:{text:e.text,location:e.center,name:e.place_name}})}}},e.children)};var k=function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(y,null),r.a.createElement(p,null)))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d14ae0be.chunk.js.map