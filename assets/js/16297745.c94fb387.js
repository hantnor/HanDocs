"use strict";(self.webpackChunkhanscreations=self.webpackChunkhanscreations||[]).push([[838],{8038:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(4848),i=s(8453);const t={sidebar_position:2},o=void 0,l={id:"Face Tracking/Advanced/Blendshape Creation",title:"Blendshape Creation",description:"Note: This page is a WIP! Instructions here are subject to change. Use at your own risk.",source:"@site/docs/Face Tracking/Advanced/Blendshape Creation.md",sourceDirName:"Face Tracking/Advanced",slug:"/Face Tracking/Advanced/Blendshape Creation",permalink:"/HanDocs/docs/Face Tracking/Advanced/Blendshape Creation",draft:!1,unlisted:!1,editUrl:"https://github.com/hantnor/HanDocs/tree/main/docs/Face Tracking/Advanced/Blendshape Creation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mesh Data Transfer",permalink:"/HanDocs/docs/Face Tracking/Advanced/Mesh Data Transfer"},next:{title:"Patcher",permalink:"/HanDocs/docs/Face Tracking/Advanced/Patcher"}},d={},a=[{value:"Recommended Blender Addons",id:"recommended-blender-addons",level:2},{value:"Project Setup",id:"project-setup",level:3},{value:"1. Model Cleanup",id:"1-model-cleanup",level:4},{value:"2. Blendshape Creation",id:"2-blendshape-creation",level:4},{value:"Additional Tips",id:"additional-tips",level:5},{value:"3. Creating Combined Shapes",id:"3-creating-combined-shapes",level:4},{value:"Testing Your Blendshapes",id:"testing-your-blendshapes",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Note: This page is a WIP! Instructions here are subject to change. Use at your own risk."})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disclaimer:"})," Blender knowledge is ",(0,r.jsx)(n.strong,{children:"required"})," to create blendshapes for your model from scratch. If you do not know Blender, this guide will not help you."]}),"\n",(0,r.jsx)(n.h2,{id:"recommended-blender-addons",children:"Recommended Blender Addons"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://blendermarket.com/products/shape-key-manager-pro",children:(0,r.jsx)(n.strong,{children:"Shape Key Manager Pro"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This addon can duplicate, rename, and mirror blendshapes you create. It saves you having to do most of the tedious work!"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/MichaelGlenMontague/shape_keys_plus/releases/tag/v2.0",children:(0,r.jsx)(n.strong,{children:"Shape Keys Plus"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This addon is a better blendshape manager that lets you easily reorder, mirror, and sort your blendshapes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/benaclejames/VRCFT-OSC-Receiver",children:(0,r.jsx)(n.strong,{children:"VRCFT-OSC-Receiver"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You can test blendshapes you make in Blender directly, without having to export your model to Unity. This is useful for testing purposes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"project-setup",children:"Project Setup"}),"\n",(0,r.jsx)(n.p,{children:"In your project, make sure you have the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A model of choice to add FT to"}),"\n",(0,r.jsx)(n.li,{children:"Any addons you may want/need"}),"\n",(0,r.jsx)(n.li,{children:"Patience (optional)"}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Method 1 - Proportional Editing"})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"1. Model Cleanup"})}),(0,r.jsx)(n.h4,{id:"1-model-cleanup",children:"1. Model Cleanup"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Make sure your model is symmetrical."})," In ",(0,r.jsx)(n.strong,{children:"Edit Mode"}),", enable ",(0,r.jsx)(n.strong,{children:"X-Mirror"})," in the upper-right of your viewport."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"G"})," (the shortcut for the Grab/Move tool) to move the mesh. The mesh should move symmetrically and not have any stray vertices splitting from either side. If you notice stray vertices moving independently, you can use the ",(0,r.jsx)(n.strong,{children:"Snap to Symmetry"})," tool to symmetrize each side."]}),"\n",(0,r.jsx)(n.li,{children:"Ensure all blendshapes are disabled when checking for symmetry to avoid misleading deformations."}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:s(7679).A+"",width:"600",height:"338"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"If your model cannot be symmetrized, use Method 2."})})})]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"2. Blendshape Creation"})}),(0,r.jsx)(n.h4,{id:"2-blendshape-creation",children:"2. Blendshape Creation"}),(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes#ue-base-shapes",children:"Unified Expressions References"})," for detailed guidelines on the facial expressions you need to create. Start creating each shape, forgoing any changes to the eyeball rotation. Eye rotation is managed by the ",(0,r.jsx)(n.strong,{children:"VRC Face Tracking (VRCFT)"})," rotation driver, so you don't need to adjust eyeball rotation unless your model lacks eye bones."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Blendshape Workflow"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"+"})," button next to the blendshape list to add a new blendshape."]}),"\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"O"})," on your keyboard to turn on proportional editing, or click the ",(0,r.jsx)(n.strong,{children:"Proportional Editing"})," icon at the top of the viewport.\r\n",(0,r.jsx)(n.img,{alt:"Image",src:s(4749).A+"",width:"603",height:"147"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," Enable ",(0,r.jsx)(n.strong,{children:"Connected Only"})," in the proportional editing options to affect only connected vertices."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select the vertices you want to modify."})," You can use tools like ",(0,r.jsxs)(n.strong,{children:["Box Select (",(0,r.jsx)(n.code,{children:"B"}),")"]})," or ",(0,r.jsxs)(n.strong,{children:["Circle Select (",(0,r.jsx)(n.code,{children:"C"}),")"]})," for efficiency."]}),"\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"G"})," to move (grab) the vertices, ",(0,r.jsx)(n.code,{children:"R"})," to rotate them, or ",(0,r.jsx)(n.code,{children:"S"})," to scale them as needed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use your mouse scroll wheel to adjust the influence radius of proportional editing."})," Scrolling up decreases the area, while scrolling down increases it."]}),"\n"]}),"\n",(0,r.jsx)(n.img,{alt:"Image",src:s(3530).A+"",width:"480",height:"316"})]}),"\n"]}),(0,r.jsx)(n.h5,{id:"additional-tips",children:"Additional Tips"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Preventing Unwanted Influence"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To prevent certain faces or vertices from being influenced, you can hide them:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"H"})," to hide selected faces or vertices."]}),"\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"Alt + H"})," to unhide them."]}),"\n"]}),"\n",(0,r.jsx)(n.img,{alt:"Image",src:s(6657).A+"",width:"480",height:"335"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Axis Constraints"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To move or rotate along a specific axis, use these shortcuts:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["After initiating a move, rotate, or scale action, press ",(0,r.jsx)(n.code,{children:"X"}),", ",(0,r.jsx)(n.code,{children:"Y"}),", or ",(0,r.jsx)(n.code,{children:"Z"})," to lock the transformation to the corresponding axis."]}),"\n",(0,r.jsxs)(n.li,{children:["Hold ",(0,r.jsx)(n.code,{children:"Shift + X"}),", ",(0,r.jsx)(n.code,{children:"Shift + Y"}),", or ",(0,r.jsx)(n.code,{children:"Shift + Z"})," to exclude an axis, restricting the transformation to the other two axes."]}),"\n"]}),"\n",(0,r.jsx)(n.img,{alt:"Image",src:s(4296).A+"",width:"480",height:"342"})]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"3. Creating Combined Shapes"})}),(0,r.jsx)(n.h4,{id:"3-creating-combined-shapes",children:"3. Creating Combined Shapes"}),(0,r.jsxs)(n.p,{children:["Some facial expressions require combined shapes to function correctly. For example, you may need a ",(0,r.jsx)(n.strong,{children:"BrowInnerUp"})," blendshape that affects both eyebrows symmetrically by combining ",(0,r.jsx)(n.strong,{children:"BrowInnerUpRight"})," and ",(0,r.jsx)(n.strong,{children:"BrowInnerUpLeft"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:s(7299).A+"",width:"480",height:"194"})}),(0,r.jsxs)(n.p,{children:["Since you've already created all the uncombined (left and right) shapes, we can use these to make combined variants using ",(0,r.jsx)(n.strong,{children:"New Shape From Mix"}),":"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Set Blendshape Values in Object Mode"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Switch to ",(0,r.jsx)(n.strong,{children:"Object Mode"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Shape Keys"})," panel, set the values of both ",(0,r.jsx)(n.strong,{children:"BrowInnerUpRight"})," and ",(0,r.jsx)(n.strong,{children:"BrowInnerUpLeft"})," to ",(0,r.jsx)(n.strong,{children:"1.0"}),", activating both needed shapes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Create a New Shape from the Mix"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Shape Keys"})," dropdown menu (the down arrow icon) in the ",(0,r.jsx)(n.strong,{children:"Shape Keys"})," panel."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:'"New Shape From Mix"'}),". This action creates a new blendshape that combines the current state of all active blendshapes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rename the New Blendshape"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The new blendshape will appear in the list, usually named something like ",(0,r.jsx)(n.strong,{children:"Key N"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Rename this new blendshape to ",(0,r.jsx)(n.strong,{children:"BrowInnerUp"})," (or the appropriate combined shape name)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reset Original Blendshape Values"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set the values of ",(0,r.jsx)(n.strong,{children:"BrowInnerUpRight"})," and ",(0,r.jsx)(n.strong,{children:"BrowInnerUpLeft"})," back to ",(0,r.jsx)(n.strong,{children:"0.0"})," to avoid unintended deformations when manipulating other blendshapes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Test the Combined Blendshape"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Move the slider of the new ",(0,r.jsx)(n.strong,{children:"BrowInnerUp"})," blendshape from ",(0,r.jsx)(n.strong,{children:"0.0"})," to ",(0,r.jsx)(n.strong,{children:"1.0"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Verify that both eyebrows move up symmetrically as intended."}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can use this same method to create other combined blendshapes, such as ",(0,r.jsx)(n.strong,{children:"EyeClosed"}),", ",(0,r.jsx)(n.strong,{children:"MouthSmile"}),", etc."]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Method 2 - Sculpt Mode"})}),(0,r.jsx)(n.p,{children:"To be addressed."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"testing-your-blendshapes",children:"Testing Your Blendshapes"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:s(7676).A+"",width:"480",height:"270"})}),"\n",(0,r.jsx)(n.p,{children:"After creating your blendshapes, it's always important to test them to make sure they work as you expect. You can test with an upload to VRChat, but there are a couple of other alternatives if you prefer to test locally. \\o/"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Option 1: Testing in Blender using VRCFT-OSC-Receiver"})}),(0,r.jsx)(n.p,{children:"This method allows you to test your blendshapes directly in Blender without exporting your model to Unity."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ensure VRCFT-OSC-Receiver Addon is Installed"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install the ",(0,r.jsx)(n.a,{href:"https://github.com/benaclejames/VRCFT-OSC-Receiver",children:"VRCFT-OSC-Receiver"})," addon in Blender if you haven't already."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Open VRC Face Tracking (VRCFT)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure VRCFT software is running and properly tracking your facial expressions. I usually use LiveLink for iOS, but you can use MeowFace for Android!"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable the Receiver in Blender"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In Blender, select your model's body mesh."}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"VRCFT Receiver"})," panel in the Properties window."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Start Receiver"})," to begin receiving OSC data from VRCFT."]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"You should be able to oogle at the camera and check to see if there's any changes you need to make. If some combined and split blendshapes for the same action trigger (eg. LipFunnelUpper and Lipfunnel are activating, creating something way too exaggerated), you can hide the specific shapes with the eyeball icon. In Unity, they will act properly!"})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Option 2: Testing in Unity with Gesture Manager and Av3Emulator"})}),(0,r.jsx)(n.p,{children:"This method involves exporting your model to Unity and testing the blendshapes within the Unity environment."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Export Your Model from Blender"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Export your model as an ",(0,r.jsx)(n.strong,{children:"FBX"})," file with shape keys (blendshapes) included.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Create a backup of your FBX file in Unity before making changes."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Import Your Model into Unity"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open your Unity project for VRChat avatar development."}),"\n",(0,r.jsx)(n.li,{children:"Import your FBX into the folder where it's normally stored."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install Gesture Manager and Av3Emulator"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Import both ",(0,r.jsx)(n.a,{href:"https://github.com/BlackStartx/VRC-Gesture-Manager",children:"Gesture Manager"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/lyuma/Av3Emulator",children:"Av3Emulator"})," and into your Unity project."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Open VRC Face Tracking (VRCFT)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure VRCFT software is running and properly tracking your facial expressions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Test Through the Expressions Wheel"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable both Eye and Face Tracking through the wheel as if you were in game, and oogle at the screen! If there's anything you noticed that doesn't quite add up, you can make changes in Blender and re-export."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4749:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Demo2-d0d22d4a526de2a062f6db86e897574f.png"},7679:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF1-a3f20b2ae3dc5e91f8b8cbad484b555e.gif"},4296:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF2-862ed5cffc7f46146beb058ef034a169.gif"},6657:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF3-a05f7dcd81bf8fdfc67d118132837463.gif"},3530:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF4-d35a44975b2e2d1b424941b56c2ec535.gif"},7299:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF5-ed87c4e6c8c1e84f0917592120ae2f84.gif"},7676:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/DemoGIF6-201ef62cae83726f768b47575a006da9.gif"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);