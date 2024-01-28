import{r,o as W,j as H,l as w,i as re,h as se,s as q,n as ie,p as Y,q as ae,E as ke}from"./index-ejOMQ5mP.js";import"./react-is.production.min-T_4AIkBo.js";import{u as Te}from"./useTheme-js-pnjgx.js";import{T as _e,r as je,g as ye,b as Ne,a as J,M as ze,P as He,o as xe}from"./Modal-nf0MEq-X.js";import{u as le}from"./useForkRef-kwGwuOoY.js";import{u as Q,i as Ae}from"./useSlotProps-_sd9eYnP.js";import{u as Ke}from"./useEnhancedEffect-pF7N8rFg.js";function We(t,e=166){let o;function h(...g){const P=()=>{t.apply(this,g)};clearTimeout(o),o=setTimeout(P,e)}return h.clear=()=>{clearTimeout(o)},h}const Ue=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ne(t){return`scale(${t}, ${t**2})`}const Ge={entering:{opacity:1,transform:ne(1)},entered:{opacity:1,transform:"none"}},ee=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Re=r.forwardRef(function(e,o){const{addEndListener:h,appear:g=!0,children:P,easing:f,in:p,onEnter:u,onEntered:y,onEntering:R,onExit:x,onExited:I,onExiting:E,style:j,timeout:M="auto",TransitionComponent:v=_e}=e,a=W(e,Ue),_=r.useRef(),n=r.useRef(),s=Te(),c=r.useRef(null),b=le(c,P.ref,o),i=l=>S=>{if(l){const C=c.current;S===void 0?l(C):l(C,S)}},$=i(R),F=i((l,S)=>{je(l);const{duration:C,delay:N,easing:d}=ye({style:j,timeout:M,easing:f},{mode:"enter"});let L;M==="auto"?(L=s.transitions.getAutoHeightDuration(l.clientHeight),n.current=L):L=C,l.style.transition=[s.transitions.create("opacity",{duration:L,delay:N}),s.transitions.create("transform",{duration:ee?L:L*.666,delay:N,easing:d})].join(","),u&&u(l,S)}),A=i(y),U=i(E),O=i(l=>{const{duration:S,delay:C,easing:N}=ye({style:j,timeout:M,easing:f},{mode:"exit"});let d;M==="auto"?(d=s.transitions.getAutoHeightDuration(l.clientHeight),n.current=d):d=S,l.style.transition=[s.transitions.create("opacity",{duration:d,delay:C}),s.transitions.create("transform",{duration:ee?d:d*.666,delay:ee?C:C||d*.333,easing:N})].join(","),l.style.opacity=0,l.style.transform=ne(.75),x&&x(l)}),G=i(I),K=l=>{M==="auto"&&(_.current=setTimeout(l,n.current||0)),h&&h(c.current,l)};return r.useEffect(()=>()=>{clearTimeout(_.current)},[]),H.jsx(v,w({appear:g,in:p,nodeRef:c,onEnter:F,onEntered:A,onEntering:$,onExit:O,onExited:G,onExiting:U,addEndListener:K,timeout:M==="auto"?null:M},a,{children:(l,S)=>r.cloneElement(P,w({style:w({opacity:0,transform:ne(.75),visibility:l==="exited"&&!p?"hidden":void 0},Ge[l],j,P.props.style),ref:b},S))}))});Re.muiSupportAuto=!0;const Ve=Re,Be=r.createContext({}),qe=Be;function Xe(t){return re("MuiList",t)}se("MuiList",["root","padding","dense","subheader"]);const Ye=["children","className","component","dense","disablePadding","subheader"],Je=t=>{const{classes:e,disablePadding:o,dense:h,subheader:g}=t;return ae({root:["root",!o&&"padding",h&&"dense",g&&"subheader"]},Xe,e)},Qe=q("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disablePadding&&e.padding,o.dense&&e.dense,o.subheader&&e.subheader]}})(({ownerState:t})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Ze=r.forwardRef(function(e,o){const h=ie({props:e,name:"MuiList"}),{children:g,className:P,component:f="ul",dense:p=!1,disablePadding:u=!1,subheader:y}=h,R=W(h,Ye),x=r.useMemo(()=>({dense:p}),[p]),I=w({},h,{component:f,dense:p,disablePadding:u}),E=Je(I);return H.jsx(qe.Provider,{value:x,children:H.jsxs(Qe,w({as:f,className:Y(E.root,P),ref:o,ownerState:I},R,{children:[y,g]}))})}),et=Ze,tt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function te(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function Ee(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function Se(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function X(t,e,o,h,g,P){let f=!1,p=g(t,e,e?o:!1);for(;p;){if(p===t.firstChild){if(f)return!1;f=!0}const u=h?!1:p.disabled||p.getAttribute("aria-disabled")==="true";if(!p.hasAttribute("tabindex")||!Se(p,P)||u)p=g(t,p,o);else return p.focus(),!0}return!1}const ot=r.forwardRef(function(e,o){const{actions:h,autoFocus:g=!1,autoFocusItem:P=!1,children:f,className:p,disabledItemsFocusable:u=!1,disableListWrap:y=!1,onKeyDown:R,variant:x="selectedMenu"}=e,I=W(e,tt),E=r.useRef(null),j=r.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ke(()=>{g&&E.current.focus()},[g]),r.useImperativeHandle(h,()=>({adjustStyleForScrollbar:(n,s)=>{const c=!E.current.style.width;if(n.clientHeight<E.current.clientHeight&&c){const b=`${Ne(J(n))}px`;E.current.style[s.direction==="rtl"?"paddingLeft":"paddingRight"]=b,E.current.style.width=`calc(100% + ${b})`}return E.current}}),[]);const M=n=>{const s=E.current,c=n.key,b=J(s).activeElement;if(c==="ArrowDown")n.preventDefault(),X(s,b,y,u,te);else if(c==="ArrowUp")n.preventDefault(),X(s,b,y,u,Ee);else if(c==="Home")n.preventDefault(),X(s,null,y,u,te);else if(c==="End")n.preventDefault(),X(s,null,y,u,Ee);else if(c.length===1){const i=j.current,$=c.toLowerCase(),F=performance.now();i.keys.length>0&&(F-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&$!==i.keys[0]&&(i.repeating=!1)),i.lastTime=F,i.keys.push($);const A=b&&!i.repeating&&Se(b,i);i.previousKeyMatched&&(A||X(s,b,!1,u,te,i))?n.preventDefault():i.previousKeyMatched=!1}R&&R(n)},v=le(E,o);let a=-1;r.Children.forEach(f,(n,s)=>{if(!r.isValidElement(n)){a===s&&(a+=1,a>=f.length&&(a=-1));return}n.props.disabled||(x==="selectedMenu"&&n.props.selected||a===-1)&&(a=s),a===s&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(a+=1,a>=f.length&&(a=-1))});const _=r.Children.map(f,(n,s)=>{if(s===a){const c={};return P&&(c.autoFocus=!0),n.props.tabIndex===void 0&&x==="selectedMenu"&&(c.tabIndex=0),r.cloneElement(n,c)}return n});return H.jsx(et,w({role:"menu",ref:v,className:p,onKeyDown:M,tabIndex:g?0:-1},I,{children:_}))}),nt=ot;function rt(t){return re("MuiPopover",t)}se("MuiPopover",["root","paper"]);const st=["onEntering"],it=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],at=["slotProps"];function be(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function we(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function Me(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function oe(t){return typeof t=="function"?t():t}const lt=t=>{const{classes:e}=t;return ae({root:["root"],paper:["paper"]},rt,e)},ct=q(ze,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ce=q(He,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),ut=r.forwardRef(function(e,o){var h,g,P;const f=ie({props:e,name:"MuiPopover"}),{action:p,anchorEl:u,anchorOrigin:y={vertical:"top",horizontal:"left"},anchorPosition:R,anchorReference:x="anchorEl",children:I,className:E,container:j,elevation:M=8,marginThreshold:v=16,open:a,PaperProps:_={},slots:n,slotProps:s,transformOrigin:c={vertical:"top",horizontal:"left"},TransitionComponent:b=Ve,transitionDuration:i="auto",TransitionProps:{onEntering:$}={},disableScrollLock:F=!1}=f,A=W(f.TransitionProps,st),U=W(f,it),O=(h=s==null?void 0:s.paper)!=null?h:_,G=r.useRef(),K=le(G,O.ref),l=w({},f,{anchorOrigin:y,anchorReference:x,elevation:M,marginThreshold:v,externalPaperSlotProps:O,transformOrigin:c,TransitionComponent:b,transitionDuration:i,TransitionProps:A}),S=lt(l),C=r.useCallback(()=>{if(x==="anchorPosition")return R;const m=oe(u),D=(m&&m.nodeType===1?m:J(G.current).body).getBoundingClientRect();return{top:D.top+be(D,y.vertical),left:D.left+we(D,y.horizontal)}},[u,y.horizontal,y.vertical,R,x]),N=r.useCallback(m=>({vertical:be(m,c.vertical),horizontal:we(m,c.horizontal)}),[c.horizontal,c.vertical]),d=r.useCallback(m=>{const T={width:m.offsetWidth,height:m.offsetHeight},D=N(T);if(x==="none")return{top:null,left:null,transformOrigin:Me(D)};const fe=C();let V=fe.top-D.vertical,B=fe.left-D.horizontal;const he=V+T.height,me=B+T.width,ge=xe(oe(u)),Pe=ge.innerHeight-v,ve=ge.innerWidth-v;if(v!==null&&V<v){const k=V-v;V-=k,D.vertical+=k}else if(v!==null&&he>Pe){const k=he-Pe;V-=k,D.vertical+=k}if(v!==null&&B<v){const k=B-v;B-=k,D.horizontal+=k}else if(me>ve){const k=me-ve;B-=k,D.horizontal+=k}return{top:`${Math.round(V)}px`,left:`${Math.round(B)}px`,transformOrigin:Me(D)}},[u,x,C,N,v]),[L,ce]=r.useState(a),z=r.useCallback(()=>{const m=G.current;if(!m)return;const T=d(m);T.top!==null&&(m.style.top=T.top),T.left!==null&&(m.style.left=T.left),m.style.transformOrigin=T.transformOrigin,ce(!0)},[d]);r.useEffect(()=>(F&&window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)),[u,F,z]);const Le=(m,T)=>{$&&$(m,T),z()},De=()=>{ce(!1)};r.useEffect(()=>{a&&z()}),r.useImperativeHandle(p,()=>a?{updatePosition:()=>{z()}}:null,[a,z]),r.useEffect(()=>{if(!a)return;const m=We(()=>{z()}),T=xe(u);return T.addEventListener("resize",m),()=>{m.clear(),T.removeEventListener("resize",m)}},[u,a,z]);let ue=i;i==="auto"&&!b.muiSupportAuto&&(ue=void 0);const $e=j||(u?J(oe(u)).body:void 0),Z=(g=n==null?void 0:n.root)!=null?g:ct,pe=(P=n==null?void 0:n.paper)!=null?P:Ce,Fe=Q({elementType:pe,externalSlotProps:w({},O,{style:L?O.style:w({},O.style,{opacity:0})}),additionalProps:{elevation:M,ref:K},ownerState:l,className:Y(S.paper,O==null?void 0:O.className)}),de=Q({elementType:Z,externalSlotProps:(s==null?void 0:s.root)||{},externalForwardedProps:U,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:$e,open:a},ownerState:l,className:Y(S.root,E)}),{slotProps:Ie}=de,Oe=W(de,at);return H.jsx(Z,w({},Oe,!Ae(Z)&&{slotProps:Ie,disableScrollLock:F},{children:H.jsx(b,w({appear:!0,in:a,onEntering:Le,onExited:De,timeout:ue},A,{children:H.jsx(pe,w({},Fe,{children:I}))}))}))}),pt=ut;function dt(t){return re("MuiMenu",t)}se("MuiMenu",["root","paper","list"]);const ft=["onEntering"],ht=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],mt={vertical:"top",horizontal:"right"},gt={vertical:"top",horizontal:"left"},Pt=t=>{const{classes:e}=t;return ae({root:["root"],paper:["paper"],list:["list"]},dt,e)},vt=q(pt,{shouldForwardProp:t=>ke(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),yt=q(Ce,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),xt=q(nt,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Et=r.forwardRef(function(e,o){var h,g;const P=ie({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:p,className:u,disableAutoFocusItem:y=!1,MenuListProps:R={},onClose:x,open:I,PaperProps:E={},PopoverClasses:j,transitionDuration:M="auto",TransitionProps:{onEntering:v}={},variant:a="selectedMenu",slots:_={},slotProps:n={}}=P,s=W(P.TransitionProps,ft),c=W(P,ht),b=Te(),i=b.direction==="rtl",$=w({},P,{autoFocus:f,disableAutoFocusItem:y,MenuListProps:R,onEntering:v,PaperProps:E,transitionDuration:M,TransitionProps:s,variant:a}),F=Pt($),A=f&&!y&&I,U=r.useRef(null),O=(d,L)=>{U.current&&U.current.adjustStyleForScrollbar(d,b),v&&v(d,L)},G=d=>{d.key==="Tab"&&(d.preventDefault(),x&&x(d,"tabKeyDown"))};let K=-1;r.Children.map(p,(d,L)=>{r.isValidElement(d)&&(d.props.disabled||(a==="selectedMenu"&&d.props.selected||K===-1)&&(K=L))});const l=(h=_.paper)!=null?h:yt,S=(g=n.paper)!=null?g:E,C=Q({elementType:_.root,externalSlotProps:n.root,ownerState:$,className:[F.root,u]}),N=Q({elementType:l,externalSlotProps:S,ownerState:$,className:F.paper});return H.jsx(vt,w({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?mt:gt,slots:{paper:l,root:_.root},slotProps:{root:C,paper:N},open:I,ref:o,transitionDuration:M,TransitionProps:w({onEntering:O},s),ownerState:$},c,{classes:j,children:H.jsx(xt,w({onKeyDown:G,actions:U,autoFocus:f&&(K===-1||y),autoFocusItem:A,variant:a},R,{className:Y(F.list,R.className),children:p}))}))}),Lt=Et;export{qe as L,Lt as M,We as d};
