(this["webpackJsonpcrypto-now"]=this["webpackJsonpcrypto-now"]||[]).push([[0],{32:function(e,t,n){e.exports={Modal:"Modal_Modal__3jvAz",ModalContent:"Modal_ModalContent__39F2y"}},43:function(e,t,n){e.exports={BgImg:"HomeMainSection_BgImg__1sGhO"}},44:function(e,t,n){e.exports={Table:"Table_Table__2Rg0e"}},45:function(e,t,n){e.exports={BgImg:"ConverterMainSection_BgImg__1fU83"}},46:function(e,t,n){e.exports={BgImg:"CryptoPageLayer_BgImg__21JBN"}},53:function(e,t,n){},54:function(e,t,n){},7:function(e,t,n){e.exports={HoverEffect:"Navbar_HoverEffect__7iNPg",MyActive:"Navbar_MyActive__2Ng--"}},80:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(22),o=n.n(a),s=(n(53),n(54),n(11)),l=n(5),i=n(7),u=n.n(i),d=n(14),j=n.n(d),b=n(18),f="LOAD_API",m="LOAD_API_ERR",h="SET_LOADING",x="SET_CURRENT_CURRENCY",p="TOGGLE_MODAL",O="CHANGE_UNIT_STATE",y="SAVE_UNITS",g="SEARCH_UNITS",v="GET_RATES",w="CHANGE_CURRENT_RATE",C="ADD_CURRENCY",N="GET_CRYPTOES",M="CHANGE_UNIT_BTN",k="ADD_CURRENCY_BTN",_="SET_SHOW_MENU",E=n(19),S=n.n(E),U="7ac21a39b1ee376cd1d1131452ff9c5d",T=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(D()),n.next=4,S()("https://api.nomics.com/v1/currencies/ticker?key=".concat(U,"&ids=").concat(e,"&interval=1d&convert=").concat(t,"&per-page=100&page=1"));case 4:r=n.sent,c(I(r.data[0])),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),c(H(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},B=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(D()),e.next=4,S()("https://api.nomics.com/v1/exchange-rates?key=".concat(U));case 4:n=e.sent,t(L(n.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t(H(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return{type:N,payload:e}},A=function(e){return{type:w,payload:e}},L=function(e){return{type:v,payload:e}},P=function(e){return{type:O,payload:e}},F=function(e){return{type:f,payload:e}},H=function(e){return{type:m,payload:e}},I=function(e){return{type:x,payload:e}},D=function(){return{type:h}},W=function(e){return{type:p,payload:e}},V=function(e){return{type:_,payload:e}},G=n(2),z=n(0),Y=function(e){var t=e.classes,n=e.unit,c=e.clicked,r=e.disabled;return Object(z.jsx)("button",{onClick:c,className:t,disabled:r,children:n})},J=Object(G.b)((function(e){return{unit:e.unit,showModal:e.showModal,changeUnitBtn:e.changeUnitBtn}}),(function(e){return{toggleModal:function(t){return e(W(t))},changeUnitBtnAction:function(t){return e({type:M,payload:t})}}}))((function(e){var t=e.unit,n=e.toggleModal,r=e.showModal,a=e.classes,o=e.changeUnitBtnAction,s=e.changeUnitBtn;Object(c.useEffect)((function(){!1===r&&!1!==s&&o(!1)}),[r]);return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Y,{classes:"".concat(a," mx-3 bg-transparent focus:outline-none cursor-pointer"),unit:t,clicked:function(){n(!0),o(!0)}})})})),X=Object(G.b)((function(e){return{showModal:e.showModal,addCurrencyBtn:e.addCurrencyBtn}}),(function(e){return{toggleModal:function(t){return e(W(t))},addCurrencyBtnAction:function(t){return e({type:k,payload:t})}}}))((function(e){var t=e.classes,n=e.toggleModal,r=e.showModal,a=e.addCurrencyBtn,o=e.addCurrencyBtnAction;Object(c.useEffect)((function(){!1===r&&!1!==a&&o(!1)}),[r]);return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("button",{className:"".concat(t," mx-3 bg-transparent outline-none cursor-pointer focus:outline-none  "),onClick:function(){n(!0),o(!0)},children:"Add Currency"})})})),q=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};r.a.useEffect((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},K=Object(G.b)((function(e){return{showMenu:e.showMenu}}),(function(e){return{setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.showMenu,n=e.homepage,r=e.cryptoPage,a=e.setShowMenu,o=e.onClickOutside,l=Object(c.useRef)();q(l,o);return Object(z.jsxs)("div",{className:"HamburgerMenu absolute top-0 left-0 h-full w-1/2 opacity-95 bg-gray-700 z-50 transform text-white p-5 transition-transform  ".concat(t?"translate-x-0":"-translate-x-full"),ref:l,children:[Object(z.jsx)(s.c,{exact:!0,activeClassName:u.a.MyActive,to:"/",className:"mx-3 w-max py-5 block md:hidden ".concat(u.a.HoverEffect),children:"Home"}),Object(z.jsx)(s.c,{to:"/converter",activeClassName:u.a.MyActive,className:"mx-3 w-max py-5 block md:hidden ".concat(u.a.HoverEffect),children:"Converter"}),n&&Object(z.jsx)(X,{classes:"".concat(u.a.HoverEffect," w-max py-5 block md:hidden")}),(n||r)&&Object(z.jsx)(J,{classes:"".concat(u.a.HoverEffect," w-max py-5 block md:hidden")}),Object(z.jsx)("span",{className:"material-icons right-5 cursor-pointer top-5 absolute",onClick:function(){a(!1)},children:"close"})]})})),Q=n(13),Z=function(e){var t=e.unit,n=e.clicked;return Object(z.jsx)("input",{className:"cursor-pointer py-3 px-6 m-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all",type:"button",onClick:n,value:t})},$=Object(G.b)(null,(function(e){return{searchUnits:function(t,n){return e(function(e,t){return{type:g,payload:{filteredUnits:e,filterState:t}}}(t,n))}}}))((function(e){var t=e.arrayToSearch,n=e.searchUnits,r=e.filterState,a=Object(c.useState)(""),o=Object(Q.a)(a,2),s=o[0],l=o[1],i=Object(c.useRef)(!0);Object(c.useLayoutEffect)((function(){if(i.current)i.current=!1;else{var e=t.filter((function(e){return e.toLowerCase().includes(s.toLowerCase())}));n(e,r)}}),[s]);return Object(z.jsx)("input",{className:"border border-gray-300 md:w-6/12 w-full rounded-lg py-2 px-4 my-4 mx-auto block ",type:"text",placeholder:"Search...",value:s,onChange:function(e){l(e.target.value)}})})),ee=n(32),te=n.n(ee),ne=Object(G.b)((function(e){return{}}),(function(e){return{toggleModalAction:function(t){return e(W(t))}}}))((function(e){var t=e.showModal,n=e.toggleModalAction,r=e.children,a=e.onClickOutside,o=Object(c.useRef)();return q(o,a),Object(z.jsx)("div",{className:"".concat(te.a.Modal),style:{display:"".concat(t?"block":"none")},children:Object(z.jsxs)("div",{ref:o,className:"".concat(te.a.ModalContent," relative text-black top-10 md:top-0"),children:[Object(z.jsx)("span",{onClick:function(){return n(!1)},className:"material-icons cursor-pointer right-4 top-3 absolute",children:"close"}),r]})})})),ce=Object(G.b)((function(e){return{allUnitsWithFilter:e.allUnitsWithFilter,allUnits:e.allUnits,loading:e.loading,cryptoToLoad:e.cryptoToLoad,showModal:e.showModal,showMenu:e.showMenu}}),(function(e){return{changeUnit:function(t,n){return e(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(D()),n.next=4,S()("https://api.nomics.com/v1/currencies/ticker?key=".concat(U,"&ids=").concat(t.join(","),"&interval=1d&convert=").concat(e,"&per-page=100&page=1"));case 4:r=n.sent,c(F(r.data)),c(P(e)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),c(H(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},toggleModal:function(t){return e(W(t))},setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.loading,n=e.changeUnit,r=e.toggleModal,a=e.allUnits,o=e.allUnitsWithFilter,s=e.cryptoToLoad,l=e.showModal,i=e.showMenu,u=e.setShowMenu,d=Object(c.useState)(!1),j=Object(Q.a)(d,2),b=j[0],f=j[1];Object(c.useEffect)((function(){return f(!0),function(){f(!1)}}),[]);var m=function(e){n(e.target.value,s),r(!1),i&&u(!1)};return Object(z.jsxs)(ne,{showModal:l,onClickOutside:function(){b&&r(!1)},children:[Object(z.jsx)("h1",{className:"text-2xl font-bold text-center ",children:"Show Prices In Another Currency"}),Object(z.jsx)($,{arrayToSearch:a,filterState:"allUnitsWithFilter"}),Object(z.jsx)("div",{className:"text-center",children:!t&&a.length>0?o.map((function(e){return Object(z.jsx)(Z,{unit:e,clicked:m},e)})):null})]})})),re=Object(G.b)((function(e){return{showModal:e.showModal,loading:e.loading,rates:e.rates,allUnitsWithFilter:e.allUnitsWithFilter,cryptoes:e.cryptoes,filteredCryptoes:e.filteredCryptoes,showMenu:e.showMenu,addCurrencyBtn:e.addCurrencyBtn}}),(function(e){return{toggleModal:function(t){return e(W(t))},addCurrency:function(t){return e(function(e){return{type:C,payload:e}}(t))},setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.loading,n=e.toggleModal,r=e.addCurrency,a=e.filteredCryptoes,o=e.showModal,s=e.cryptoes,l=e.showMenu,i=e.setShowMenu,u=(e.addCurrencyBtn,Object(c.useState)(!1)),d=Object(Q.a)(u,2),j=d[0],b=d[1];Object(c.useEffect)((function(){return b(!0),function(){b(!1)}}),[]);var f=function(e){r(e.target.value),n(!1),l&&i(!1)};return Object(z.jsxs)(ne,{showModal:o,onClickOutside:function(){j&&n(!1)},children:[Object(z.jsx)("h1",{className:"text-2xl font-bold text-center ",children:"Add New Currency"}),Object(z.jsx)($,{arrayToSearch:s,filterState:"filteredCryptoes"}),Object(z.jsx)("div",{className:"text-center",children:!t&&s.length>0?a.map((function(e){return Object(z.jsx)(Z,{unit:e,clicked:f},e)})):"Loading..."})]})})),ae=Object(G.b)((function(e){return{loading:e.loading,changeUnitBtn:e.changeUnitBtn,addCurrencyBtn:e.addCurrencyBtn,showMenu:e.showMenu}}),(function(e){return{loadCurrency:function(t){return e(T(t))},setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.homepage,n=e.cryptoPage,c=e.changeUnitBtn,r=e.addCurrencyBtn,a=e.setShowMenu,o=e.showMenu;return Object(z.jsxs)("nav",{className:"".concat(n?"bg-gray-800":"bg-transparent"," py-5 border-b border-yellow-500"),children:[Object(z.jsxs)("div",{className:"container mx-auto text-white flex md:justify-between justify-center items-center",children:[Object(z.jsx)(s.b,{to:"/",className:"font-bold text-3xl ml-2",children:"CryptoNow"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(s.c,{exact:!0,activeClassName:u.a.MyActive,to:"/",className:"mx-3 md:inline-block hidden ".concat(u.a.HoverEffect),children:"Home"}),Object(z.jsx)(s.c,{to:"/converter",activeClassName:u.a.MyActive,className:" mx-3 md:inline-block hidden ".concat(u.a.HoverEffect),children:"Converter"}),t&&Object(z.jsx)(X,{classes:"".concat(u.a.HoverEffect," md:inline-block hidden")}),(t||n)&&Object(z.jsx)(J,{classes:"".concat(u.a.HoverEffect," md:inline-block hidden")})]})]}),Object(z.jsx)("span",{className:"material-icons HamburgerIcon inline-block absolute top-5 cursor-pointer left-4 text-4xl text-white md:hidden",onClick:function(){a(!0)},children:"menu"}),Object(z.jsx)(K,{homepage:t,cryptoPage:n,onClickOutside:function(){o&&a(!1)}}),c?Object(z.jsx)(ce,{}):null,r?Object(z.jsx)(re,{}):null]})})),oe=n(43),se=n.n(oe),le=function(){return Object(z.jsx)("div",{className:"".concat(se.a.BgImg," flex justify-center items-center text-white text-center"),children:Object(z.jsxs)("h1",{className:"z-20 lg:text-5xl font-bold mb-14 leading-loose md:text-4xl sm:text-2xl text-xl",children:["Check Latest Crypto Currency ",Object(z.jsx)("br",{className:"inline md:hidden"})," ","Prices ",Object(z.jsx)("br",{className:"md:inline hidden"})," And More Details"]})})},ie=function(e){var t=e.className,n=e.name,c=e.symbol;return Object(z.jsxs)("div",{className:"".concat(t," flex items-center w-40"),children:[Object(z.jsxs)("h2",{children:[n," "]}),Object(z.jsxs)("span",{className:"text-gray-500 text-sm ml-2",children:[" (",c,")"]})]})},ue=function(e){var t=e.className,n=e.size,c=e.logo,r=e.alt;return Object(z.jsx)("div",{className:"".concat(t," w-").concat(n," h-").concat(n),children:Object(z.jsx)("img",{src:c,alt:r,className:" max-h-full max-w-full "})})},de=function(e){var t=e.className,n=e.iconClass,c=e.ChangePct;return Object(z.jsxs)("div",{className:"".concat(t," flex items-center w-32 justify-center md:justify-start ").concat(c>=0?"text-green-500":"text-red-500"),children:[Object(z.jsx)("span",{className:"".concat(n," material-icons "),children:"".concat(c>=0?"arrow_upward":"arrow_downward")}),"%",(100*Math.abs(c)).toFixed(2)]})},je=function(e){return(new Intl.NumberFormat).format(Math.round(10*e)/10)},be=function(e){return e>=1e9?je(e/1e9)+"B":e>=1e6?je(e/1e6)+"M":e>=1e3?je(e/1e3)+"k":je(e)},fe=function(e){return e.toLocaleString("en-US")},me=function(e){var t=e.className,n=e.price;return Object(z.jsxs)("div",{className:"".concat(t," font-bold "),children:[0!=fe(n)?fe(n):n," "]})},he=function(e){var t=e.data,n=e.onClickHandler;return Object(z.jsxs)("tr",{className:"border-b border-gray-300 cursor-pointer",onClick:n,children:[Object(z.jsx)("td",{className:"md:pl-7",children:Object(z.jsx)(ue,{className:"md:mr-8",logo:t.logo_url,size:12,alt:t.id})}),Object(z.jsx)("td",{children:Object(z.jsx)(ie,{name:t.name,symbol:t.symbol})}),Object(z.jsx)("td",{children:Object(z.jsx)(me,{price:+t.price})}),Object(z.jsx)("td",{className:"md:block hidden",children:Object(z.jsx)(de,{ChangePct:t["1d"].price_change_pct})})]})},xe=n(15),pe=n.n(xe),Oe=n(44),ye=n.n(Oe),ge=Object(G.b)((function(e){return{unit:e.unit}}))((function(e){var t=e.unit;return Object(z.jsxs)("span",{className:"text-gray-400 md:text-xs md:my-0 my-3",children:["(",t,")"]})})),ve=Object(G.b)((function(e){return{apiData:e.apiData,loading:e.loading}}))(Object(l.f)((function(e){var t=e.apiData,n=e.history,c=e.loading;return Object(z.jsxs)("table",{className:"".concat(ye.a.Table," w-8/12 shadow-md  border absolute  top-2/4 left-1/2  rounded-md  transform -translate-x-1/2 bg-white "),children:[Object(z.jsx)("thead",{children:Object(z.jsxs)("tr",{className:"border-b border-gray-300",children:[Object(z.jsx)("th",{}),Object(z.jsx)("th",{children:"Name"}),Object(z.jsxs)("th",{children:["Price ",Object(z.jsx)(ge,{})]}),Object(z.jsx)("th",{className:"md:block hidden",children:"Change"})]})}),Object(z.jsx)("tbody",{children:c?Object(z.jsx)("tr",{children:Object(z.jsx)("td",{colSpan:"5",children:Object(z.jsx)(pe.a,{height:80,rows:6})})}):null!==t&&t.map((function(e){return Object(z.jsx)(he,{data:e,onClickHandler:function(){return t=e.symbol,void n.push({pathname:"/currency/"+t,param:t});var t}},e.id)}))})]})}))),we=Object(G.b)((function(e){return{unit:e.unit,cryptoToLoad:e.cryptoToLoad,showMenu:e.showMenu}}),(function(e){return{onLoadApi:function(t,n){return e(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(D()),n.next=4,S()("https://api.nomics.com/v1/currencies/ticker?key=".concat(U,"&ids=").concat(t.join(","),"&interval=1d&convert=").concat(e,"&per-page=100&page=1"));case 4:r=n.sent,c(F(r.data)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),c(H(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.onLoadApi,n=e.unit,r=e.cryptoToLoad,a=e.showMenu,o=e.setShowMenu;return Object(c.useEffect)((function(){a&&o(!1),t(n,r)}),[n,r]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ae,{homepage:!0}),Object(z.jsx)(le,{}),Object(z.jsx)(ve,{})]})})),Ce=n(45),Ne=n.n(Ce),Me=function(){return Object(z.jsx)("div",{className:"".concat(Ne.a.BgImg)})},ke=function(){return Object(z.jsx)("span",{className:"material-icons text-white md:text-6xl text-4xl my-3",children:"cached"})},_e=Object(G.b)((function(e){return{showModal:e.showModal,showMenu:e.showMenu,loading:e.loading,rates:e.rates,allUnitsWithFilter:e.allUnitsWithFilter,allUnits:e.allUnits}}),(function(e){return{toggleModal:function(t){return e(W(t))},changeCurrentRate:function(t){return e(A(t))},setShowMenu:function(t){return e(V(t))}}}))((function(e){var t=e.loading,n=e.toggleModal,r=e.rates,a=e.changeCurrentRate,o=e.allUnitsWithFilter,s=e.showModal,l=e.allUnits,i=e.showMenu,u=e.setShowMenu,d=Object(c.useState)(!1),j=Object(Q.a)(d,2),b=j[0],f=j[1];Object(c.useEffect)((function(){return f(!0),function(){f(!1)}}),[]);var m=function(e){a(e.target.value),n(!1),i&&u(!1)};return Object(z.jsxs)(ne,{showModal:s,onClickOutside:function(){b&&n(!1)},children:[Object(z.jsx)("h1",{className:"md:text-2xl text-xl font-bold text-center ",children:"Other Currencies To Convert"}),Object(z.jsx)($,{arrayToSearch:l,filterState:"allUnitsWithFilter"}),Object(z.jsx)("div",{className:"text-center",children:t||null===r?null:o.map((function(e){return Object(z.jsx)(Z,{unit:e,clicked:m},e)}))})]})})),Ee=Object(G.b)((function(e){return{rates:e.rates,currentRate:e.currentRate,showModal:e.showModal,showMenu:e.showMenu}}),(function(e){return{toggleModal:function(t){return e(W(t))},setShowMenu:function(t){return e(V(t))},changeCurrentRate:function(t){return e(A(t))},getRates:function(){return e(B())}}}))((function(e){var t=e.currentRate,n=e.toggleModal,r=e.showModal,a=e.changeCurrentRate,o=e.rates,s=e.showMenu,l=e.setShowMenu,i=e.getRates,u=Object(c.useState)(""),d=Object(Q.a)(u,2),j=d[0],b=d[1],f=Object(c.useState)(""),m=Object(Q.a)(f,2),h=m[0],x=m[1],p=Object(c.useRef)(!1);Object(c.useEffect)((function(){null===o&&i(),s&&l(!1),null!==o&&""===t[0].rate&&a("BTC"),!1===r&&(p.current=!1)}),[r,o]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ae,{}),Object(z.jsx)(Me,{}),Object(z.jsxs)("div",{className:"flex flex-col justify-center items-center h-96",children:[Object(z.jsxs)("div",{className:"flex md:w-2/4 w-10/12",children:[Object(z.jsx)(Y,{classes:"rounded-tl-md rounded-bl-md px-4 outline-none bg-white focus:outline-none cursor-not-allowed ",disabled:!0,unit:"USD"}),Object(z.jsx)("input",{type:"number",className:"p-3 rounded-tr-md rounded-br-md w-full outline-none",value:j,placeholder:"Enter USD...",onChange:function(e){b(e.target.value),x(+e.target.value*+t[0].rate)}}),";"]}),Object(z.jsx)(ke,{}),Object(z.jsxs)("div",{className:"flex md:w-2/4 w-10/12",children:[Object(z.jsx)(Y,{classes:"rounded-tl-md rounded-bl-md px-4 outline-none bg-white focus:outline-none ",unit:t?t[0].currency:"",clicked:function(){n(!0),p.current=!0}}),Object(z.jsx)("input",{type:"tezt",className:"p-3 rounded-tr-md rounded-br-md w-full outline-none",value:h,placeholder:"Enter ".concat(t?t[0].currency:"BTC","..."),onChange:function(e){x(e.target.value),b(+e.target.value/+t[0].rate)}}),p.current?Object(z.jsx)(_e,{}):null,";"]})]})]})})),Se=function(e){var t=e.marketCap,n=e.marketCapPct;return Object(c.useEffect)((function(){}),[]),Object(z.jsxs)("div",{className:"flex flex-col  md:items-start items-center my-3 md:my-0 border-t-4 border-yellow-400 md:border-none pt-5 md:pt-0",children:[Object(z.jsxs)("span",{className:"uppercase text-sm text-gray-300 ",children:["market cap ",Object(z.jsx)(ge,{})]}),Object(z.jsx)("span",{className:"my-2",children:be(t)}),Object(z.jsx)(de,{className:"text-sm ",iconClass:"text-base",ChangePct:n})]})},Ue=function(e){var t=e.volume,n=e.volumePct;e.unit;return Object(z.jsxs)("div",{className:"flex flex-col md:items-start items-center",children:[Object(z.jsxs)("span",{className:"uppercase text-sm text-gray-300 ",children:["volume ",Object(z.jsx)(ge,{})]}),Object(z.jsx)("span",{className:"my-2",children:be(t)}),Object(z.jsx)(de,{className:"text-sm",iconClass:"text-base",ChangePct:n})]})},Te=function(e){var t=e.rank;return Object(z.jsxs)("div",{className:"flex flex-col md:items-start pr-5 items-center mt-3 md:mt-0 ml-6 md:ml-0",children:[Object(z.jsx)("span",{className:"uppercase text-sm text-gray-300 ",children:"Rank"}),Object(z.jsxs)("span",{className:"my-2",children:["#",t]})]})},Be=function(e){var t=e.marketCapVal,n=e.volumeVal,r=e.rankVal,a=e.marketCapPctVal,o=e.volumePctVal;return Object(c.useEffect)((function(){}),[]),Object(z.jsxs)("div",{className:"md:flex md:flex-row md:justify-between md:text-center md:ml-20 flex flex-col justify-center items-center ",children:[t&&Object(z.jsx)(Se,{marketCap:t,marketCapPct:a}),n&&Object(z.jsx)(Ue,{volume:n,volumePct:o}),r&&Object(z.jsx)(Te,{rank:r})]})},Re=Object(G.b)((function(e){return{loading:e.loading}}))(Object(l.f)((function(e){var t=e.currency;return Object(z.jsx)(z.Fragment,{children:null!==t&&Object(z.jsxs)("div",{className:"md:flex md:flex-col md:w-full container md:mx-auto md:h-screen md:-m-24 md:justify-center text-white flex flex-col justify-center items-center md:items-stretch p-5 -mt-8",children:[Object(z.jsxs)("div",{className:"flex py-10 items-center",children:[Object(z.jsx)(ue,{logo:t.logo_url,size:20,alt:t.id}),Object(z.jsx)(ie,{className:"text-2xl ml-4 font-bold",name:t.name,symbol:t.symbol})]}),Object(z.jsx)("div",{children:Object(z.jsxs)("div",{className:"md:flex h-20",children:[Object(z.jsxs)("div",{className:"md:w-1/3 md:flex md:justify-between md:pl-10 md:items-end text-center md:text-left",children:[Object(z.jsx)(me,{className:"text-3xl mb-2 md:mb-0",price:+t.price}),Object(z.jsx)(ge,{}),Object(z.jsx)(de,{className:"text-lg my-2 md:my-0",ChangePct:t["1d"].price_change_pct})]}),Object(z.jsx)("div",{className:"md:w-2/3",children:Object(z.jsx)(Be,{marketCapVal:t.market_cap,marketCapPctVal:t["1d"].market_cap_change_pct,volumeVal:t["1d"].volume,volumePctVal:t["1d"].volume_change_pct,rankVal:t.rank})})]})})]})})}))),Ae=n(46),Le=n.n(Ae),Pe=function(){return Object(z.jsx)("div",{className:"".concat(Le.a.BgImg)})},Fe=Object(G.b)((function(e){return{currency:e.currentCurrency,loading:e.loading,unit:e.unit}}),(function(e){return{loadCurrency:function(t,n){return e(T(t,n))}}}))(Object(l.f)((function(e){var t=e.currency,n=e.loadCurrency,r=e.match,a=e.loading,o=e.unit;return Object(c.useEffect)((function(){n(r.params.name,o)}),[r.params.name,o]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ae,{cryptoPage:!0}),a?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"flex  justify-center items-center pt-20",children:[Object(z.jsx)(pe.a,{circle:!0,width:100}),Object(z.jsx)(pe.a,{width:"70%",height:"50px"})]}),Object(z.jsx)("div",{className:"flex  justify-center items-center py-5",children:Object(z.jsx)(pe.a,{width:"77%",height:"50px"})}),Object(z.jsx)("div",{className:"flex  justify-center items-center py-5",children:Object(z.jsx)(pe.a,{width:"77%",height:"50px"})}),Object(z.jsx)("div",{className:"flex  justify-center items-center py-5",children:Object(z.jsx)(pe.a,{width:"77%",height:"50px"})})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Pe,{}),Object(z.jsx)(Re,{currency:t})]})]})})));var He=Object(G.b)((function(e){return{rates:e.rates,allUnits:e.allUnits,cryptoes:e.cryptoes,showModal:e.showModal}}),(function(e){return{getRates:function(){return e(B())},getCryptoes:function(){return e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(D()),e.next=4,S()("https://api.nomics.com/v1/markets?key=".concat(U,"&exchange=binance"));case 4:n=e.sent,c=[],n.data.forEach((function(e){c.push(e.base)})),t(R(c)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),t(H(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},saveUnits:function(t){return e({type:y,payload:t})}}}))((function(e){var t=e.rates,n=e.getRates,r=e.allUnits,a=e.saveUnits,o=e.getCryptoes,i=e.cryptoes,u=e.showModal;return Object(c.useEffect)((function(){if(null===t&&u&&n(),0===r.length&&null!==t){var e=[];t.forEach((function(t){e.push(t.currency)})),a(e)}}),[t,u]),Object(c.useEffect)((function(){0===i.length&&u&&o()}),[u]),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(s.a,{children:Object(z.jsxs)(l.c,{children:[Object(z.jsx)(l.a,{path:"/converter",exact:!0,component:Ee}),Object(z.jsx)(l.a,{path:"/currency/:name",exact:!0,component:Fe}),Object(z.jsx)(l.a,{path:"/",component:we})]})})})})),Ie=n(17),De=n(47),We=n(48),Ve=n(26),Ge=n(25),ze=n(3),Ye=function(e,t){switch(t.type){case f:return Object(ze.a)(Object(ze.a)({},e),{},{apiData:t.payload,loading:!1});case m:return Object(ze.a)(Object(ze.a)({},e),{},{error:t.payload,loading:!1});case x:return Object(ze.a)(Object(ze.a)({},e),{},{currentCurrency:t.payload,loading:!1});case h:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case p:return Object(ze.a)(Object(ze.a)({},e),{},{showModal:t.payload});case O:return Object(ze.a)(Object(ze.a)({},e),{},{unit:t.payload});case y:return Object(ze.a)(Object(ze.a)({},e),{},{allUnits:t.payload,allUnitsWithFilter:t.payload,loading:!1});case g:return Object(ze.a)(Object(ze.a)({},e),{},Object(Ge.a)({},t.payload.filterState,t.payload.filteredUnits));case v:return Object(ze.a)(Object(ze.a)({},e),{},{rates:t.payload,loading:!1});case w:var n=e.rates.filter((function(e){return e.currency===t.payload}));return Object(ze.a)(Object(ze.a)({},e),{},{currentRate:n});case C:return Object(ze.a)(Object(ze.a)({},e),{},{cryptoToLoad:[].concat(Object(Ve.a)(e.cryptoToLoad),[t.payload])});case N:return Object(ze.a)(Object(ze.a)({},e),{},{cryptoes:Object(Ve.a)(new Set(t.payload)),filteredCryptoes:Object(Ve.a)(new Set(t.payload))});case"FILTER_CRYPTOES":return Object(ze.a)(Object(ze.a)({},e),{},{filteredCryptoes:t.payload});case M:return Object(ze.a)(Object(ze.a)({},e),{},{changeUnitBtn:t.payload});case k:return Object(ze.a)(Object(ze.a)({},e),{},{addCurrencyBtn:t.payload});case _:return Object(ze.a)(Object(ze.a)({},e),{},{showMenu:t.payload});default:return e}},Je=[De.a],Xe=Object(Ie.createStore)(Ye,{apiData:null,error:null,currentCurrency:null,loading:!1,unit:"USD",showModal:!1,allUnits:[],allUnitsWithFilter:[],cryptoToLoad:["BTC","ETH","BNB","DOGE","USDT","TRX","LTC","BCH"],rates:null,currentRate:[{currency:"BTC",rate:""}],cryptoes:[],filteredCryptoes:[],addCurrencyBtn:!1,changeUnitBtn:!1,showMenu:!1},Object(We.composeWithDevTools)(Ie.applyMiddleware.apply(void 0,Je)));o.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(G.a,{store:Xe,children:Object(z.jsx)(He,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.78c7f91c.chunk.js.map