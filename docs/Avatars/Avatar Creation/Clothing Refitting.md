---
sidebar_position: 1
---

*Why doesnt my outfit work?*

Hello! If you stumbled your way here, you're a bit early! I haven't finished writing this yet. Come back later when I have something to show!

Also, psst, I'll be making a YouTube tutorial on this too x

<hr></hr>

That being said though, enjoy what I have so far \o/

### Disclaimer: Most of this is just personal notes right now, I'm making a framework lol

With VRChat models becoming more diverse and popular to create from scratch, it creates a lot of market for clothing makers. People making comfy outfits, unique fashion ideas, or ways for groups and communities to express themselves. Most of the time, clothing options are tailored to a specific (popular) avatar, but there could be demand to add it to another popular base. What happens if you use a niche model that you know wouldn't be supported? This is what I hope my guide can help with!

<details>
  <summary><strong>Method 1 - Proportional Editing</strong></summary>

<details>
  <summary><strong>1. Model Setup</strong></summary>

  #### 1. Model Setup

  In your project, add in the avatar model you'd like to fit your clothing onto, and then the clothing you want. Then, selecting the clothing's armature, align your clothing to "best-fit" the model, moving/rotating/scaling it to fit nicely on the shoulders and feet as best as you can. It won't be perfect, but we're looking for good, not perfect (yet!). 

  [image NEEDED]

  There is a chance that the clothing is posed differently from your target avatar (eg. clothing is in A-pose and model is in T-pose). For this, (...) (pose mode > armature modifier save as shapekey > apply pose as rest pose > apply to basis) [image NEEDED]

  Once best-fit, you can select the armature, hit `Ctrl + A`, and apply all transforms.

  [image]

  After that's done, you can delete the old clothing armature.

</details>

Depending on your clothing of choice, you can now move on to **either** step 2 or 3. Both steps require knowledge of [**proportional editing**](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Advanced/Blendshape%20Creation#2-blendshape-creation).

<details>
  <summary><strong>2. Loose-fit Refit</strong></summary>

#### 2. Loose-fit Refit

  If your clothing is loose-fit (sweater, pants, shoes, etc), this step is for you! If it is skin-tight, please skip to step 3.

  <hr></hr>

  If your model is symmetrical, make sure to clean it up! See [**this step**](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Advanced/Blendshape%20Creation#1-model-cleanup) for more details.

  As for fitting, you can use proportional editing to fix any clipping, shape, or limb proportion changes. This now comes down to artist's eye, so no concrete advice can be given. Imagine you're wearing it!

[GIF NEEDED?]

For very loose clothing, you have the liberty to add some "wiggle-room" between the clothing and body mesh to account for clipping. Use this to your advantage!

</details>  

<details>
  <summary><strong>3. Skin-tight Refit</strong></summary>

#### 3. Skin-tight Refit

  If your clothing is skin-tight (leggings/tights, fishnets, latex, spidey-suit), this step is for you! If it is loose-fit, please head back to step 2.

  <hr></hr>

  If your model is symmetrical, make sure to clean it up! See [**this step**](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Advanced/Blendshape%20Creation#1-model-cleanup) for more details.

  Some important landmarks to be noted are areas of high deformation (elbows, knees). These areas may have denser topology, and should be matched up with the base model. It'll help prevent further clipping!

  [image NEEDED]

- shrinkwrap modifierrrrr [image]
    - offset defo needed
    - apply as shapekey [image]
- surface smooth tool to smooth out wrinkles/crinkles in topology

</details>  

<details>
  <summary><strong>4. Weight Painting</strong></summary>

#### 4. Weight Painting

- prep model, baldify lmao [image]
- basically use RWT for 90% of it and manually do the rest if need be [image]

</details>

<details>
  <summary><strong>5. Blendshape Transfer</strong></summary>

#### 5. Blendshape Transfer

- use MDT [image]
- cover briefly here specific for clothing, then refer to specific step in MDT guide

</details>

</details>

<details>
  <summary><strong>Method 2 - Vulpes's Tailoring Tool</strong></summary>

I do not know how this works fully yet, will get Vulpes's input or just use his tutorial video (if he has one?)

</details>  

After either method is completed, you can then export the clothing to Unity. For a more in-depth explanation, see [here](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Advanced/Blendshape%20Creation#exporting).

<hr></hr>

<details>
  <summary><strong>Unity Setup</strong></summary>

  - armature link [image]
  - blendshape link [image]

</details>

<hr></hr>



<details>
    <summary><strong>Notes for self</strong></summary>
    Lattice modifier(?)
    Use proportional editing in most cases unless asymmetry?
    Robust Weight Transfer
    Mesh Data Transfer
    ALSO alt method Vulpes Tailoring Tool
</details>