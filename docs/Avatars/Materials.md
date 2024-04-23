---
sidebar_position: 3
---

*Why are there so many material slots listed for this one piece of clothing?*

<hr/>

**Materials** dictate how a specific part of your avatar is rendered. This includes things like texture, color, and lighting effects.

**Material slots** hold one material each. Depending on how your avatar is set up, you will have a varying amount of slots, allowing you to render each part of your model differently. It's important to keep the amount of material slots on an avatar **low** for good performance.

## Shaders

For any avatar, choosing an optimized shader is going to serve as an excellent foundation for your materials. Popular shaders like **Liltoon**, **Mochie's Shaders**, and **Poiyomi Toon** work excellently.
- For Quest, you are limited to what's available in `VRChat > Mobile`. There's good reason for this!

- If you are using **Poiyomi**, remember that it is a **robust** shader. For the capabilities it has, utilizing optimization features is a must! In-built features like **shader locking** come in super handy, disabling any features you may not use. Any features that you don't use, please be sure to **uncheck and disable** them. If an animated proprty is enabled but not used, it will add unnecessary load. Right-click these properties and uncheck the animated property.

### Culling

*Why can I see through one side of a wall?!*

Avatar (and world) materials may appear one-sided due to a shader feature called **back-face culling**. 

Usually when rendering an object, it is **opaque**. To alleviate half of the processing time rendering the other side of an object you'd normally not see, shaders can **cull** (remove) the backside of a mesh. 

Quest shaders like **Standard Lite** and **Toon Lit** have this property to ensure optimized performance on mobile platforms. For PC shaders like **Poiyomi Toon**, this setting can be turned off.

## Methods

<hr/>

### Polytool

Polytool is a **paid** Unity addon by [**Markoragon**](https://markcreator.gumroad.com/l/Polytool) to simplify the process of optimizing materials. It can be used to merge and **atlas** textures and materials.
- **Atlassing** refers to combining multiple textures onto one material, instead of having them split up among many materials.

### Manual Atlassing

If you prefer to have more direct control over what polygons are removed, you can do this manually in **Blender**. (documentation on this through Beanthusiast TBA)