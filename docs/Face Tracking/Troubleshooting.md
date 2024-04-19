---
sidebar_position: 5
---

## Oh no, something is broken!

Let's make sure that there isn't an error on your end. If not, you can create a support ticket in my [Discord server](https://discord.gg/hantnor).

### DiffSize Error
![Image](./img/error1.png)

If you get this error, you may have an out-of-date FBX file. Verify you have the latest version by comparing your version with the original seller's latest version.

If they match, make sure your FBX is **unedited**.

If your FBX is the proper one, and the patch still fails, make a support ticket in my [server](https://discord.gg/hantnor) under the #ticket-requests channel, and mention you got a **DiffSize** error. 
<hr/>

### Unable to find Jerry's Template in your project
If you can't progress onto [this](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Beginner/PatchGuide#3-add-the-fx) stage, you may be forgetting to grab [**Adjerry's Face Tracking Templates**](https://github.com/Adjerry91/VRCFaceTracking-Templates). These are crucial for most patchers to work!
<hr/>

### Cannot see FT working in-game
You may have to reset your **VRChat OSC Cache**. More info [here](https://docs.vrcft.io/docs/vrcft-software/vrcft#resetting-vrchat-osc-configs). 

The reason you have to do this is because when you initially load an avatar, VRCFT makes a “mental note” if it has FT parameters or not, and then saves it. Once it has written down if it has/doesn’t have it, then it won’t recheck, even if the avatar is updated with FT later on.  

If you clear the history, then it will check again. It will rewrite the config to say that the avatar has FT installed, and will remember that.