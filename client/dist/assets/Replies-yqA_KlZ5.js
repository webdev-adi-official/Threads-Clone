import{r as t,_ as o,a,j as e,S as n,L as l}from"./index-ejOMQ5mP.js";import{u as p}from"./useMediaQuery-veD3v3SJ.js";import{T as u}from"./Typography-8tdXd-pp.js";import"./useEnhancedEffect-pF7N8rFg.js";const c=t.lazy(()=>o(()=>import("./Comment-cJYcjNeQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),h=()=>{const{user:s}=a(r=>r.service),i=p("(min-width:700px)");return e.jsx(e.Fragment,{children:e.jsx(n,{flexDirection:"column",gap:2,width:i?"800px":"90%",mx:"auto",children:e.jsx(t.Suspense,{fallback:e.jsx(l,{}),children:s&&s.user?s.user.replies.length>0?s.user.replies.map(r=>e.jsx(c,{e:r,postId:r.post},r._id)):e.jsx(u,{textAlign:"center",variant:"h6",children:"No Replies yet !"}):null})})})};export{h as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Comment-cJYcjNeQ.js","assets/index-ejOMQ5mP.js","assets/index-AA6V2BOJ.css","assets/index.esm-kkkImSXi.js","assets/iconBase-4R61x3Rr.js","assets/useMediaQuery-veD3v3SJ.js","assets/useEnhancedEffect-pF7N8rFg.js","assets/Avatar-cj3lPPpq.js","assets/createSvgIcon-mUo6UpKZ.js","assets/Typography-8tdXd-pp.js","assets/Menu-cUaQ8PkP.js","assets/react-is.production.min-T_4AIkBo.js","assets/useTheme-js-pnjgx.js","assets/Modal-nf0MEq-X.js","assets/useForkRef-kwGwuOoY.js","assets/TransitionGroupContext-prrqPGpl.js","assets/useSlotProps-_sd9eYnP.js","assets/MenuItem-626ZPQWI.js","assets/ButtonBase-DuLANiGZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
