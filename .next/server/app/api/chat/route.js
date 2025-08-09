(()=>{var e={};e.id=276,e.ids=[276],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1130:()=>{},1440:(e,t,r)=>{"use strict";e.exports=r(4870)},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>m,routeModule:()=>u,serverHooks:()=>l,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>x});var a={};r.r(a),r.d(a,{POST:()=>c,maxDuration:()=>i});var o=r(1440),s=r(6533),n=r(9108);let i=30,p=process.env.PYTHON_API_URL||"http://localhost:8000";async function c(e){try{let{messages:t}=await e.json(),r=await fetch(`${p}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t})});if(!r.ok)throw Error(`Erro na API Python: ${r.status}`);let a=await r.json();return new Response(JSON.stringify({message:a.message,role:"assistant"}),{headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Erro ao conectar com backend Python:",e),new Response(JSON.stringify({message:`🤖 **Hipertrofia.IA Temporariamente Offline** 

Estamos com problemas t\xe9cnicos no momento, mas posso te dar algumas dicas b\xe1sicas:

💪 **TREINO B\xc1SICO:**
• Segunda/Quarta/Sexta: Corpo todo
• Agachamento: 3x15
• Flex\xe3o: 3x10
• Prancha: 3x30seg

🥗 **ALIMENTA\xc7\xc3O:**
• Prote\xedna em cada refei\xe7\xe3o
• 8-10 copos de \xe1gua/dia
• Evite a\xe7\xfacar em excesso

Tente novamente em alguns minutos! 🚀`,role:"assistant"}),{headers:{"Content-Type":"application/json"}})}}let u=new o.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"C:\\Users\\franc\\OneDrive\\\xc1rea de Trabalho\\Projetos\\hipertrofia.IA-1\\app\\api\\chat\\route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:d,workUnitAsyncStorage:x,serverHooks:l}=u;function m(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:x})}},6626:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[108],()=>r(5997));module.exports=a})();