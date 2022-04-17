(this["webpackJsonpcocktails-with-react-and-redux"]=this["webpackJsonpcocktails-with-react-and-redux"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s=n(0),l=n.n(s),d=n(13),u=n.n(d),j=n(21),b=n(143),p=n(80),h=Object(p.a)({palette:{primary:{light:"#ffffff",main:"#fffde7",dark:"#cccab5",contrastText:"#000"},secondary:{light:"#8b6b61",main:"#5d4037",dark:"#8b6b61",contrastText:"#fff"}},typography:{h4:{fontFamily:["Bungee Inline","cursive"].join(",")},h5:{fontFamily:["Bungee Inline","cursive"].join(",")},button:{fontFamily:["Bungee Inline","cursive"].join(",")}}}),O=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var c={type:e};return n.forEach((function(e,t){c[n[t]]=a[t]})),c}},x="SHOW_SNACKBAR",m=O(x,"payload"),f="CLOSE_SNACKBAR",g=O(f),v=n(147),y=n(145),k=n(3),w=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.snackbarProvider})),n=t.message,a=t.severity,r=t.showSnackbar;return r&&Object(k.jsx)(v.a,{open:r,onClose:function(t,n){"clickaway"!==n&&e(g())},autoHideDuration:5e3,children:Object(k.jsx)(y.a,{severity:a,padding:"6px 16px",children:n})})},_=n(42),E=n(8),S=n(52),C=n(9),T=n(44),R=n(28),L=n(29),N=n(133),A=Object(L.a)((function(e){e._margin,e._padding,e._maxWidth;var t=Object(T.a)(e,["_margin","_padding","_maxWidth"]);return Object(k.jsx)(N.a,Object(C.a)({container:!0},t))}))(a||(a=Object(R.a)(["\n  &.MuiGrid-container {\n    margin: ",";\n    padding: ",";\n  }\n"])),(function(e){return e._margin}),(function(e){return e._padding})),I=Object(L.a)((function(e){var t=Object.assign({},e);return Object(k.jsx)("div",Object(C.a)({},t))}))(r||(r=Object(R.a)(["\n  padding: 10px 0;\n  background-color: ",";\n  color: ",";\n"])),h.palette.primary.main,h.palette.primary.contrastText),D=function(){return Object(k.jsx)(I,{children:Object(k.jsx)(A,{_padding:"3px 30px",children:Object(k.jsx)(S.a,{variant:"h4",component:"h1",children:"Cocktails with React and Redux"})})})},G=n(16),W=n.n(G),M=n(22),P=function(){var e=Object(M.a)(W.a.mark((function e(){var t,n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 2:if(200!==(t=e.sent).status){e.next=11;break}return e.next=6,t.json();case 6:return n=e.sent,a=n.drinks[0],e.abrupt("return",a);case 11:throw new Error("There was an error in your request. Try later.");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B="GET_DRINK",H="GET_DRINK_ERROR",U="GET_DRINK_SUCCESS",F=O(B),K=O(H,"payload"),J=O(U,"payload"),X=function(){return function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F()),e.prev=1,e.next=4,P();case 4:n=e.sent,t(J(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(K(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},q=n(141),V=Object(L.a)((function(e){e._margin,e._padding,e._maxWidth;var t=Object(T.a)(e,["_margin","_padding","_maxWidth"]);return Object(k.jsx)(N.a,Object(C.a)({container:!0},t))}))(c||(c=Object(R.a)(["\n  &.MuiGrid-container {\n    margin: ",";\n    padding: ",";\n    max-width: ",";\n  }\n"])),(function(e){return e._margin}),(function(e){return e._padding}),(function(e){return e._maxWidth})),z=n(30),Q=n(135),Y=n(136),Z=n(137),$=n(138),ee=n(140),te=n(134),ne=Object(te.a)((function(e){return{root:{width:250},media:{height:0,paddingTop:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},containedPrimary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,textAlign:"center",fontStyle:"italic",wordBreak:"break-all"}}})),ae=n(139),re=function(e){var t=e.data,n=e.isLoading,a=ne();return Object(k.jsx)(Q.a,{className:a.root,children:t&&!n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y.a,{title:t.strDrink,className:a.containedPrimary}),Object(k.jsx)(Z.a,{"data-testid":"thumbnail",className:a.media,image:"".concat(t.strDrinkThumb,"/preview"),title:t.strDrink}),Object(k.jsxs)($.a,{className:a.containedPrimary,children:[Object(k.jsx)(S.a,{variant:"body2",component:"p",children:"Ingredients:"}),Object.entries(t).map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return-1!==n.indexOf("Ingredient")&&a?Object(k.jsxs)(S.a,{variant:"body2",component:"p",children:["*",a]},a):null}))]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y.a,{title:"Loading...",className:a.containedPrimary}),Object(k.jsx)(ae.a,{variant:"rect",height:250}),Object(k.jsx)($.a,{className:a.containedPrimary,children:Object(k.jsx)(ee.a,{"data-testid":"loader"})})]})})},ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.randomCocktailSection})),n=t.drink,a=t.isLoading,r=t.error;return!a&&r&&alert(r),Object(s.useEffect)((function(){e(X())}),[e]),Object(k.jsxs)(V,{container:!0,direction:"column",_maxWidth:"1140px",children:[Object(k.jsx)(S.a,{component:"h2",variant:"h5",children:"A random cocktail"}),Object(k.jsxs)(V,{direction:"column",alignItems:"center",children:[Object(k.jsx)(re,{data:n,isLoading:a}),Object(k.jsx)(q.a,{style:{margin:"12px",borderRadius:"100%",height:"100px",width:"100px"},variant:"contained",color:"primary",onClick:function(){return e(X())},children:"Get a new one"}),Object(k.jsx)(_.b,{to:"/".concat("cocktails-app"),children:Object(k.jsx)(q.a,{variant:"contained",color:"secondary",style:{marginTop:"15px",color:"#ffffff"},children:"Back home"})})]})]})},ie=function(){return Object(k.jsx)(N.a,{container:!0,justifyContent:"center",children:Object(k.jsx)(ce,{})})},oe=n(102),se=Object(L.a)((function(e){e._margin;var t=Object(T.a)(e,["_margin"]);return Object(k.jsx)(ae.a,Object(C.a)({},t))}))(i||(i=Object(R.a)(["\n  &.MuiSkeleton-root {\n    margin: ",";\n  }\n"])),(function(e){return e._margin})),le=Object(oe.a)((function(){return{root:{marginTop:"20px"}}})),de=n(101),ue=n(148),je=Object(te.a)((function(e){return{paper:{padding:"5px 40px",color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,borderRadius:"50px",overflow:"hidden"},paperColumn:{display:"flex",alignItems:"center"},paperTitle:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"100%",lineHeight:"20px",verticalAlign:"middle"}}})),be=Object(L.a)((function(e){var t=Object.assign({},e);return Object(k.jsx)(ue.a,Object(C.a)({},t))}))(o||(o=Object(R.a)(["\n  &.MuiChip-label {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    line-height: 20px;\n    vertical-align: middle;\n  }\n  &.MuiChip-root {\n    max-width: 100px;\n  }\n"]))),pe=function(e){var t=e.data,n=je();return Object(k.jsx)(N.a,{item:!0,xs:4,children:Object(k.jsx)(de.a,{className:n.paper,children:Object(k.jsxs)(N.a,{container:!0,justifyContent:"space-between",children:[Object(k.jsx)(N.a,{item:!0,className:n.paperColumn,xs:6,children:Object(k.jsx)(S.a,{variant:"body1",className:n.paperTitle,children:t.strDrink})}),Object(k.jsx)(N.a,{item:!0,className:n.paperChip,children:Object(k.jsx)(be,{label:t.strAlcoholic,color:"primary"})})]})})},t.idDrink)},he=function(){var e=Object(j.c)((function(e){return e.searchSection})),t=e.results,n=e.isLoading,a=le();return Object(k.jsx)(N.a,{container:!0,spacing:3,style:{maxWidth:"1140px"},className:a.root,justifyContent:n?"center":null,children:t&&!n?t.map((function(e){return Object(k.jsx)(pe,{data:e},e.idDrink)})):n?Object(k.jsx)(se,{_margin:"30px 0 0 0",variant:"rect",width:"80%",height:150}):null})},Oe=n(78),xe=n.n(Oe),me=n(144),fe=n(142),ge=function(){var e=Object(M.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve="UPDATE_SEARCH_TERM",ye="CLEAR_SEARCH_RESULTS",ke="GET_SEARCH",we="GET_SEARCH_ERROR",_e="GET_SEARCH_SUCCESS",Ee=O(ve,"payload"),Se=O(ye),Ce=O(ke),Te=O(we,"payload"),Re=O(_e,"payload"),Le=Object(te.a)((function(){return{link:{textDecoration:"underline",cursor:"pointer"}}})),Ne=function(){var e=Object(j.b)(),t=Le(),n=Object(j.c)((function(e){return e.searchSection})).searchTerm,a=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(M.a)(W.a.mark((function t(n){var a,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.length){t.next=17;break}return n(Ce()),t.prev=2,t.next=5,ge(e);case 5:a=t.sent,r=a.drinks,n(Re(r)),n(m({message:"successful search",severity:"success"})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),n(Te(t.t0.message)),n(m({message:t.t0.message,severity:"error"}));case 15:t.next=18;break;case 17:n(m({message:"The search bar can't be empty.",severity:"info"}));case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}(n))};return Object(k.jsxs)(N.a,{container:!0,direction:"column",alignItems:"center",style:{maxWidth:"1140px"},children:[Object(k.jsx)("img",{src:"".concat("/cocktails-app","/assets/images/cocktails-and-drinks.png"),alt:"a full table of cocktails and drinks with a coloured water splash in the background",style:{maxWidth:"514px"}}),Object(k.jsxs)("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(k.jsx)(me.a,{label:"Search a drink",color:"secondary",InputProps:{startAdornment:Object(k.jsx)(fe.a,{position:"start",children:Object(k.jsx)(xe.a,{})})},value:n,onChange:function(t){return e(Ee(t.target.value))}}),Object(k.jsxs)(N.a,{container:!0,justifyContent:"center",spacing:2,style:{maxWidth:"1140px",overflow:"hidden",marginBottom:"5px"},children:[Object(k.jsx)(N.a,{item:!0,children:Object(k.jsx)(q.a,{onClick:a,variant:"contained",color:"primary",style:{marginTop:"15px"},children:"Search"})}),Object(k.jsx)(N.a,{item:!0,children:Object(k.jsx)(_.b,{to:"/".concat("cocktails-app","/random-search"),children:Object(k.jsx)(q.a,{variant:"contained",color:"secondary",style:{marginTop:"15px",color:"#ffffff"},children:"Random search"})})})]}),Object(k.jsx)(S.a,{variant:"caption",className:t.link,onClick:function(){return e(Se())},children:"Clear results"})]})]})},Ae=function(){return Object(k.jsxs)(N.a,{container:!0,justifyContent:"center",children:[Object(k.jsx)(Ne,{}),Object(k.jsx)(he,{})]})},Ie="cocktails-app",De=function(){return Object(k.jsxs)(_.a,{children:[Object(k.jsx)(D,{}),Object(k.jsxs)(E.c,{children:[Object(k.jsx)(E.a,{path:"".concat(Ie,"/random-search"),element:Object(k.jsx)(ie,{})}),Object(k.jsx)(E.a,{exact:!0,path:"".concat(Ie,"/"),element:Object(k.jsx)(Ae,{})}),Object(k.jsx)(E.a,{path:"*",element:Object(k.jsx)(Ae,{})})]})]})};var Ge=function(){return Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsxs)(b.a,{theme:h,children:[Object(k.jsx)(De,{}),Object(k.jsx)(w,{})]})})},We=n(47),Me=n(79),Pe="GET_CATEGORIES",Be="GET_CATEGORIES_ERROR",He="GET_CATEGORIES_SUCCESS",Ue=(O(Pe),O(Be,"payload"),O(He,"payload"),{categoriesList:null,isLoading:!1,error:null}),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0});case Be:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});case He:return{categoriesList:t.payload,isLoading:!1};default:return e}},Ke={drink:null,isLoading:!1,error:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0});case H:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});case U:return{drink:t.payload,isLoading:!1};default:return e}},Xe={count:0},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return{count:e.count+1};case"DECREMENT":return{count:e.count-1};default:return e}},Ve={searchTerm:"",results:null,isLoading:!1,error:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(C.a)(Object(C.a)({},e),{},{searchTerm:t.payload});case ye:return Object(C.a)(Object(C.a)({},e),{},{searchTerm:"",results:null});case ke:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0});case we:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});case _e:return Object(C.a)(Object(C.a)({},e),{},{results:t.payload,isLoading:!1});default:return e}},Qe={message:"",severity:"",showSnackbar:!1},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case f:return Object(C.a)(Object(C.a)({},e),{},{message:"",severity:"",showSnackbar:!1});case x:return Object(C.a)(Object(C.a)({},e),{},{message:n.message,severity:n.severity,showSnackbar:!0});default:return e}},Ze=Object(We.b)({searchSection:ze,randomCocktailSection:Je,counterSection:qe,categoriesSection:Fe,snackbarProvider:Ye}),$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||We.c,n=Object(We.d)(Ze,e,t(Object(We.a)(Me.a)));return function(){return n}}()();u.a.render(Object(k.jsx)(j.a,{store:$e,children:Object(k.jsx)(Ge,{})}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.c4ae3850.chunk.js.map