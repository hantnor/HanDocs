"use strict";(self.webpackChunkhanscreations=self.webpackChunkhanscreations||[]).push([[127],{1782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=t(4848),s=t(8453);const i={sidebar_position:5},o=void 0,a={id:"Face Tracking/Troubleshooting",title:"Troubleshooting",description:"Oh no, something is broken!",source:"@site/docs/Face Tracking/Troubleshooting.md",sourceDirName:"Face Tracking",slug:"/Face Tracking/Troubleshooting",permalink:"/HanDocs/docs/Face Tracking/Troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/hantnor/HanDocs/tree/main/docs/Face Tracking/Troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/HanDocs/docs/Face Tracking/FAQ"},next:{title:"Han's Retreat",permalink:"/HanDocs/docs/category/hans-retreat"}},c={},h=[{value:"Oh no, something is broken!",id:"oh-no-something-is-broken",level:2},{value:"DiffSize Error",id:"diffsize-error",level:3},{value:"Unable to find Jerry&#39;s Template in your project",id:"unable-to-find-jerrys-template-in-your-project",level:3},{value:"Cannot see FT working in-game",id:"cannot-see-ft-working-in-game",level:3}];function l(e){const r={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"oh-no-something-is-broken",children:"Oh no, something is broken!"}),"\n",(0,n.jsxs)(r.p,{children:["Let's make sure that there isn't an error on your end. If not, you can create a support ticket in my ",(0,n.jsx)(r.a,{href:"https://discord.gg/hantnor",children:"Discord server"}),"."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Patcher"}),(0,n.jsx)(r.h3,{id:"diffsize-error",children:"DiffSize Error"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Image",src:t(1040).A+"",width:"597",height:"673"})}),(0,n.jsx)(r.p,{children:"If you get this error, you may have an out-of-date FBX file. Verify you have the latest/most compatible version by comparing your version with the original seller's latest version."}),(0,n.jsxs)(r.p,{children:["If they match, make sure your FBX is ",(0,n.jsx)(r.strong,{children:"unedited"}),"."]}),(0,n.jsxs)(r.p,{children:["If your FBX is the proper one, and the patch still fails, make a support ticket in my ",(0,n.jsx)(r.a,{href:"https://discord.gg/hantnor",children:"server"})," under the #ticket-requests channel, and mention you got a ",(0,n.jsx)(r.strong,{children:"DiffSize"})," error."]})]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Unity Setup"}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"No templates in project"}),(0,n.jsx)(r.h3,{id:"unable-to-find-jerrys-template-in-your-project",children:"Unable to find Jerry's Template in your project"}),(0,n.jsxs)(r.p,{children:["If you can't progress onto ",(0,n.jsx)(r.a,{href:"https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Beginner/PatchGuide#3-add-the-fx",children:"this"})," stage, you may be forgetting to grab ",(0,n.jsx)(r.a,{href:"https://github.com/Adjerry91/VRCFaceTracking-Templates",children:(0,n.jsx)(r.strong,{children:"Adjerry's Face Tracking Templates"})}),". These are crucial for most patchers to work!"]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"You may have luck with other templates if you prefer how they work, but Jerry's are the most common."})})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"VRCFury Disclaimers"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Image",src:t(546).A+"",width:"763",height:"321"})}),(0,n.jsxs)(r.p,{children:["If you import your VRCFury prefab onto your avatar and you get these messages, ",(0,n.jsx)(r.strong,{children:"disregard them"}),"! 9 times out of 10, it's benign."]}),(0,n.jsx)(r.p,{children:"If it doesn't work, try any of these potential fixes:"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Close and reopen your project"}),"\n",(0,n.jsx)(r.li,{children:"Upload avatar under a new blueprint ID"}),"\n",(0,n.jsx)(r.li,{children:"Create a new project (last resort!)"}),"\n"]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"This could very well be a new bug with a recent VRCFury update. I'm not sure about it yet!"})})]})]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"In-Game"}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Face frozen forward"}),(0,n.jsx)(r.h3,{id:"cannot-see-ft-working-in-game",children:"Cannot see FT working in-game"}),(0,n.jsxs)(r.p,{children:["You may have to reset your ",(0,n.jsx)(r.strong,{children:"VRChat OSC Cache"}),". More info ",(0,n.jsx)(r.a,{href:"https://docs.vrcft.io/docs/vrcft-software/vrcft#resetting-vrchat-osc-configs",children:"here"}),"."]}),(0,n.jsx)(r.p,{children:"The reason you have to do this is because when you initially load an avatar, VRCFT makes a \u201cmental note\u201d if it has FT parameters or not, and then saves it. Once it has written down if it has/doesn\u2019t have it, then it won\u2019t recheck, even if the avatar is updated with FT later on."}),(0,n.jsx)(r.p,{children:"If you clear the history, then it will check again. It will rewrite the config to say that the avatar has FT installed, and will remember that."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"It's good practice to have a fresh first-time upload for a FT-compatible avatar!"})})})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"No FT menu in Expressions wheel"}),(0,n.jsx)(r.p,{children:"You may have forgotten to include a template prefab into your avatar. Make sure you applied it!"})]})]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},546:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/disclaimer-40cd7abbb9b66e520e62c1122c0b678f.png"},1040:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/error1-82021d79e6fad5ccff228631bcc9e4de.png"},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(6540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);