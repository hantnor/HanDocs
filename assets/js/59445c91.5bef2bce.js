"use strict";(self.webpackChunkhanscreations=self.webpackChunkhanscreations||[]).push([[127],{1782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var s=t(4848),n=t(8453);const i={sidebar_position:5},o=void 0,a={id:"Face Tracking/Troubleshooting",title:"Troubleshooting",description:"Oh no, something is broken!",source:"@site/docs/Face Tracking/Troubleshooting.md",sourceDirName:"Face Tracking",slug:"/Face Tracking/Troubleshooting",permalink:"/HanDocs/docs/Face Tracking/Troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/hantnor/HanDocs/tree/main/docs/Face Tracking/Troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/HanDocs/docs/Face Tracking/FAQ"},next:{title:"Avatars",permalink:"/HanDocs/docs/category/avatars"}},c={},h=[{value:"Oh no, something is broken!",id:"oh-no-something-is-broken",level:2},{value:"DiffSize Error",id:"diffsize-error",level:3},{value:"Unable to find Jerry&#39;s Template in your project",id:"unable-to-find-jerrys-template-in-your-project",level:3},{value:"Cannot see FT working in-game",id:"cannot-see-ft-working-in-game",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"oh-no-something-is-broken",children:"Oh no, something is broken!"}),"\n",(0,s.jsxs)(r.p,{children:["Let's make sure that there isn't an error on your end. If not, you can create a support ticket in my ",(0,s.jsx)(r.a,{href:"https://discord.gg/hantnor",children:"Discord server"}),"."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Patcher"}),(0,s.jsx)(r.h3,{id:"diffsize-error",children:"DiffSize Error"}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Image",src:t(1040).A+"",width:"597",height:"673"})}),(0,s.jsx)(r.p,{children:"If you get this error, you may have an out-of-date FBX file. Verify you have the latest/most compatible version by comparing your version with the original seller's latest version."}),(0,s.jsxs)(r.p,{children:["If they match, make sure your FBX is ",(0,s.jsx)(r.strong,{children:"unedited"}),"."]}),(0,s.jsxs)(r.p,{children:["If your FBX is the proper one, and the patch still fails, make a support ticket in my ",(0,s.jsx)(r.a,{href:"https://discord.gg/hantnor",children:"server"})," under the #ticket-requests channel, and mention you got a ",(0,s.jsx)(r.strong,{children:"DiffSize"})," error."]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Unity Setup"}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"No templates in project"}),(0,s.jsx)(r.h3,{id:"unable-to-find-jerrys-template-in-your-project",children:"Unable to find Jerry's Template in your project"}),(0,s.jsxs)(r.p,{children:["If you can't progress onto ",(0,s.jsx)(r.a,{href:"https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Beginner/PatchGuide#3-add-the-fx",children:"this"})," stage, you may be forgetting to grab ",(0,s.jsx)(r.a,{href:"https://github.com/Adjerry91/VRCFaceTracking-Templates",children:(0,s.jsx)(r.strong,{children:"Adjerry's Face Tracking Templates"})}),". These are crucial for most patchers to work!"]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"You may have luck with other templates if you prefer how they work, but Jerry's are the most common."})})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"VRCFury Disclaimers"}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Image",src:t(546).A+"",width:"763",height:"321"})}),(0,s.jsxs)(r.p,{children:["If you import your VRCFury prefab onto your avatar and you get these messages, ",(0,s.jsx)(r.strong,{children:"disregard them"}),"! 9 times out of 10, it's benign."]}),(0,s.jsx)(r.p,{children:"If it doesn't work, try any of these potential fixes:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Close and reopen your project"}),"\n",(0,s.jsx)(r.li,{children:"Upload avatar under a new blueprint ID"}),"\n",(0,s.jsx)(r.li,{children:"Create a new project (last resort!)"}),"\n"]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"This could very well be a new bug with a recent VRCFury update. I'm not sure about it yet!"})})]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"In-Game"}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Face frozen forward"}),(0,s.jsx)(r.h3,{id:"cannot-see-ft-working-in-game",children:"Cannot see FT working in-game"}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Reset OSC Config"}),(0,s.jsxs)(r.p,{children:["You may have to reset your ",(0,s.jsx)(r.strong,{children:"VRChat OSC Cache"}),". More info ",(0,s.jsx)(r.a,{href:"https://docs.vrcft.io/docs/vrcft-software/vrcft#resetting-vrchat-osc-configs",children:"here"}),"."]}),(0,s.jsx)(r.p,{children:"The reason you have to do this is because when you initially load an avatar, VRCFT makes a \u201cmental note\u201d if it has FT parameters or not, and then saves it. Once it has written down if it has/doesn\u2019t have it, then it won\u2019t recheck, even if the avatar is updated with FT later on."}),(0,s.jsx)(r.p,{children:"If you clear the history, then it will check again. It will rewrite the config to say that the avatar has FT installed, and will remember that."}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"It's good practice to have a fresh first-time upload for a FT-compatible avatar!"})})})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Path Rewrite Rules"}),(0,s.jsxs)(r.p,{children:["If your Face Tracking Debug Menu (",(0,s.jsx)(r.code,{children:"Expressions/Face Tracking/Debug"}),") is only displaying no movement of the Green circles alongside your face not responding to your headset tracking, you may need to implement ",(0,s.jsx)(r.strong,{children:"Path Rewrite Rules"}),"."]}),(0,s.jsxs)(r.p,{children:["This is because VRCFT animations look for a mesh called ",(0,s.jsx)(r.strong,{children:"Body"})," by default. While 90% of avatars use this exact naming convention, there is a small percentage that utilize other names for the meshes that actually take care of the facial blendshapes."]}),(0,s.jsx)("hr",{}),(0,s.jsxs)(r.p,{children:["Make a note of what your body mesh is called. You can find this in your ",(0,s.jsx)(r.strong,{children:"Heirarchy"}),". My mesh is named ",(0,s.jsx)(r.code,{children:"Head"}),"! (This was done to the model for demonstration purposes. The Lumistera is thankfully named properly!)"]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Image",src:t(1189).A+"",width:"489",height:"219"})}),(0,s.jsxs)(r.p,{children:["In your Face Tracking - Unified Expressions prefab that already exists on your avatar, head to your Inspector and expand ",(0,s.jsx)(r.strong,{children:"Advanced Options"}),"."]}),(0,s.jsxs)(r.p,{children:["Once opened, add a new Path Rewrite Rule. Here, set the first box to ",(0,s.jsx)(r.code,{children:"Body"}),", and the second to your mesh's name - in this case, mine is named ",(0,s.jsx)(r.code,{children:"Head"}),"."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Image",src:t(4817).A+"",width:"500",height:"667"})}),(0,s.jsx)(r.p,{children:"From here, save the prefab and upload. Should be good to go!"})]})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"No FT menu in Expressions wheel"}),(0,s.jsx)(r.p,{children:"You may have forgotten to include a template prefab into your avatar. Make sure you applied it!"})]})]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1189:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/TUT7-86ec30e1099e95af489b4f5e35d7f4b3.png"},4817:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/TUT8-dec4a97d096530e05b92c86769194e8f.gif"},546:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/disclaimer-40cd7abbb9b66e520e62c1122c0b678f.png"},1040:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/error1-82021d79e6fad5ccff228631bcc9e4de.png"},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var s=t(6540);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);