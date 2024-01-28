import{h as p,i as j,s as F,E as N,l as r,m as c,r as d,n as P,o as E,j as x,p as I,q as G}from"./index-ejOMQ5mP.js";import{L as $}from"./Menu-cUaQ8PkP.js";import{B as S}from"./ButtonBase-DuLANiGZ.js";import{u as U}from"./useEnhancedEffect-pF7N8rFg.js";import{u as D}from"./useForkRef-kwGwuOoY.js";const H=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=H,W=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=W,_=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=_;function z(e){return j("MuiMenuItem",e)}const A=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=A,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],q=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:u,classes:o}=e,i=G({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},z,o);return r({},o,i)},K=F(S,{shouldForwardProp:e=>N(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=P({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:f=!1,disableGutters:i=!1,focusVisibleClassName:k,role:L="menuitem",tabIndex:v,className:V}=a,w=E(a,h),b=d.useContext($),C=d.useMemo(()=>({dense:o||b.dense||!1,disableGutters:i}),[b.dense,o,i]),m=d.useRef(null);U(()=>{l&&m.current&&m.current.focus()},[l]);const B=r({},a,{dense:C.dense,divider:f,disableGutters:i}),g=J(a),T=D(m,s);let y;return a.disabled||(y=v!==void 0?v:-1),x.jsx($.Provider,{value:C,children:x.jsx(K,r({ref:T,role:L,tabIndex:y,component:u,focusVisibleClassName:I(g.focusVisible,k),className:I(g.root,V)},w,{ownerState:B,classes:g}))})}),se=Q;export{se as M};
