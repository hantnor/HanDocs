"use strict";(self.webpackChunkhanscreations=self.webpackChunkhanscreations||[]).push([[678],{3446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=t(4848),s=t(8453);const r={sidebar_position:2},c=void 0,a={id:"Face Tracking/Advanced/Patcher",title:"Patcher",description:"Important",source:"@site/docs/Face Tracking/Advanced/Patcher.md",sourceDirName:"Face Tracking/Advanced",slug:"/Face Tracking/Advanced/Patcher",permalink:"/HanDocs/docs/Face Tracking/Advanced/Patcher",draft:!1,unlisted:!1,editUrl:"https://github.com/hantnor/HanDocs/tree/main/docs/Face Tracking/Advanced/Patcher.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Blendshape Creation",permalink:"/HanDocs/docs/Face Tracking/Advanced/Blendshape Creation"},next:{title:"FAQ",permalink:"/HanDocs/docs/Face Tracking/FAQ"}},o={},h=[{value:"Important",id:"important",level:2},{value:"Note",id:"note",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"important",children:"Important"}),"\n",(0,i.jsxs)(n.p,{children:["To access and download the latest version of the patcher. ",(0,i.jsx)(n.a,{href:"https://github.com/hantnor/FTPatcher",children:"Download it as a ZIP file here!"})]}),"\n",(0,i.jsx)(n.h1,{id:"face-tracking-patcher",children:"Face Tracking Patcher"}),"\n",(0,i.jsxs)(n.p,{children:['Using "Batch" (.bat) files, showing proof of purchase, and TOS concerns are a thing of the past! With ',(0,i.jsx)(n.strong,{children:"FTPatcher"}),", you can include an in-editor pop-up window to easily patch edits to your model! No Unity experience is necessary for the recipient."]}),"\n",(0,i.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(n.p,{children:["This is listed primarily for the use of ",(0,i.jsx)(n.strong,{children:"face tracking"}),", but this can be used for any model edits, such as body modification, revamps, and other mesh edits. Use this to your heart's content. :)"]}),"\n",(0,i.jsx)(n.h1,{id:"set-up",children:"Set-up:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a patch file using ",(0,i.jsx)(n.strong,{children:"hdiffz.exe"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/sisong/HDiffPatch",children:"https://github.com/sisong/HDiffPatch"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In a command prompt, use ",(0,i.jsx)(n.code,{children:"cd"})," to route to the directory where ",(0,i.jsx)(n.strong,{children:"hdiffz.exe"})," is located.\r\n",(0,i.jsx)(n.img,{alt:"CMD",src:t(5567).A+"",width:"732",height:"276"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the following line in a command line:\r\n",(0,i.jsx)(n.code,{children:'hdiffz.exe "NON-FT-Original.fbx" "FT-Edited.fbx" patch.bin'}),"\r\n",(0,i.jsx)(n.img,{alt:"CMD",src:t(916).A+"",width:"1317",height:"777"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Both FBX files should be in the same directory as the hdiffz.exe executable."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CMD",src:t(7213).A+"",width:"282",height:"304"})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The 'NON-FT-Original.fbx' file is the original FBX that was edited to have the Face Tracking blendshapes."}),"\n",(0,i.jsx)(n.li,{children:"The 'FT-Edited.fbx' file the edited FBX that has the FT blendshapes. This is the FBX that will be produced when the original FBX is patched."}),"\n",(0,i.jsxs)(n.li,{children:["'patch.bin' stitches on anything ",(0,i.jsx)(n.strong,{children:"NON-FT-Original.fbx"})," doesn't have, that ",(0,i.jsx)(n.strong,{children:"FT-Edited.fbx"})," does"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set up your package folder for the model you're patching."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The default directory for this template is ",(0,i.jsx)(n.code,{children:"FT-Patcher/FT-Root-Folder/"}),". which can be changed if you'd like. ",(0,i.jsx)(n.strong,{children:"Make sure you update Orchestrator.cs with the proper directory changes!"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the Orchestrator script to work with the FBX."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rename the placeholder to the name of the fbx you are patching"}),"\n",(0,i.jsx)(n.li,{children:"You can search for '@Config' in the file to find all the places where things need to be adjusted for the model."}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pro-Tip"}),": ",(0,i.jsx)(n.code,{children:"Ctrl + F"})," to find all instances of the placeholder, ",(0,i.jsx)(n.code,{children:"Ctrl + F2"})," to edit all instances."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5567:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cmd1-4188f5ee09edc35c8de1c0d72c39eb09.png"},916:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cmd2-a80e6381891f56208f4ec2ff499aa1a6.png"},7213:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cmd3-c177286501884f6e0e7370aa585eef73.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);