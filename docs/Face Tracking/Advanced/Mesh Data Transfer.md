---
sidebar_position: 1
---

**This page is a WIP! If you came across this, information here may be subject to change.**

<hr></hr>

`An FAQ question redirects here. For more support, join my Discord server.`

*I have blendshapes on one mesh, but I'd like to transfer them to another. Is this even possible without swapping the heads?!*

It is, within reason! With two simillar models, you can transfer blendshapes from one model to another as long as they have very alike geometry. Let me show you!

<details>
   <summary>Prerequisites</summary>
   - Experience in Blender 4.3
   - Your **Source** and **Target** models
      - Source: Your model with FT blendshapes.
      - Target: Your new model that needs FT blendshapes transferred.
   - [Mesh Data Transfer](https://mmemoli.gumroad.com/l/tOKEh) addon
   </details>

**Mesh Data Transfer now works with the latest version of Blender (4.3.2)! If problems persist, ensure you have the latest version of MDT. (2.0.6)**

## Project Setup
1. Open Blender and set up a general project, deleting the objects it normally dumps. 
2. Import your **Source** and **Target** models, with your Target being the **first** to be imported.
   - If you don't know what refers to, please check **Prerequisites** above!
3. Make sure the models are **overlapping** each other at the origin of the scene. If you see **Z-fighting**, that's good in this case!

(image here)

## Transfer Preperation
1. On your **Source** model, route to the blendshapes and **uncheck** every blendshape that isn't a face tracking blendshape.

(image here)

2. On your **Target** mesh, route to the **Data** tab and select the dropdown tab named `Mesh Data Transfer`.

(image here)

3. Here, select **Shape Keys** and the "**✓**" button next to it. This will transfer the enabled shape keys that you had marked on your Source model.

   From here, Enable **World Transform**, instead of Local. This will transfer the exact positional data of each vertex dependent on where they are in the scene. *This is why I had you place the models directly on top of one another!*

   (image here)

4. Finally, press **Transfer Mesh Data** at the bottom of the window!

## Troubleshooting

1. The Target model's shapes do not do anything.
   - This is common! It may be because of the models not being aligned properly, or they are too dissimilar. Try realigning them, or trying other search methods.
   - If the models are similar, try using **Local** transform instead of World, or using **Vertex Snap**.

2. Some vertices are sticking to basis.
   - This is because there may be some misalignment with just a few vertices, which can happen. You can either move these manually per blendshape, or **dissolve** the problematic vertices to create a smoother appearance.