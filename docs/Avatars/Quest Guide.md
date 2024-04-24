---
sidebar_position: 5
---

*Hey, I can't see your avatar! You're a stick of butter!*

## Quest Guide
### Setup

You will need to make sure your workflow can support the **Android Build Target**. 
- *A video guide can be found [here](https://www.youtube.com/watch?v=PVz64SBydc4)!*

<!--- Set Texture Compression to ASTC (Located in: `File > Build Settings` > Click on **Android** and set **Texture Compression** to **ASTC**). This is automatically suggested by the SDK once you set **Android** as your build target.-->

    - Extra Note: Digitigrade rig avatars will **not** work on Quest. The legs will be stationary.

## Tools

### [VRCQuestTools](https://github.com/kurotu/VRCQuestTools)

VRCQuestTools is a **free** Unity addon by ? to also simplify the process of Quest-compatibility. Unlike Polytool, it does **most** of the work for you. The more tedious and time consuming parts of making an avatar Quest-compatible are automated:

- Materials
- Texture Resolution
- Excess Physbone components/transforms
- PC-Only Components (Lights, constraints, etc.)

*(Suggestion by [Aurelian](https://aurelianborealis.wixsite.com/aureliancommissions)!)*

### [Polytool](https://markcreator.gumroad.com/l/Polytool)

Polytool is a **paid** Unity addon by **Markoragon** to simplify the process of optimizing a model. It can easily cover complex all optimization steps needed to make a model Quest-compatible.

