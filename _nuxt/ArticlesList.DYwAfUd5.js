import w from"./ArticlesListItem.D9Tsx6hR.js";import k from"./ProseA.DeX3OeRs.js";import v from"./ProseCodeInline.Cmp0oDG-.js";import{u as I}from"./asyncData.BrlddpNT.js";import{d as S,Y as g,I as A,M as n,b as a,c as r,e as o,g as i,F as B,Z as C,j as e,w as u,p as b,i as L,s as N,$ as V,X as F,l as P}from"./entry.YALzSOoq.js";import"./date.BcWussCh.js";const T=t=>(b("data-v-c4b62ee6"),t=t(),L(),t),Y={key:0,class:"articles-list"},$={class:"featured"},j={class:"layout"},q={key:1,class:"tour"},D=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),E=S({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=g(async()=>I(_.path,async()=>await N(V(_.path)).sort({date:-1}).find(),"$mOKhB3QS4o")),s=await s,l(),s),c=A(()=>m.value||[]);return(K,M)=>{var d;const p=w,h=k,f=v;return(d=n(c))!=null&&d.length?(a(),r("div",Y,[o("div",$,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",j,[(a(!0),r(B,null,C(n(c).slice(1),(y,x)=>(a(),F(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",q,[D,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),H=P(E,[["__scopeId","data-v-c4b62ee6"]]);export{H as default};
