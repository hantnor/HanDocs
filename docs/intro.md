---
sidebar_position: 1
---

# Welcome!

This site will serve as a reference point for troubleshooting, and is a simplified, streamlined version of Benacle's Face Tracking Docs, found [here](https://docs.vrcft.io/). If you need some documentation that's more simplified, and that focuses primarily on **basic avatar setup**, you've come to the right place!

## Blendshapes, OSC, What's going on?!

This may all be overwhelming for a first-timer, and that's completely okay! I was in the same boat when I first got my headset, and I had slammed my head onto my desk trying to understand it all. Here's a rundown of some common terms you may run into, whether they're here or elsewhere:

- FT
  - This just stands for **Face Tracking**. It's a useful abbreviation!
- OSC
  - This stands for **Open Sound Control**. It's a protocol originally intended to allow communication between audio devices and controllers for musical performances, but has capabilities far beyond that! (s. VRChat Docs)
  - In short, this is the "messenger" between external programs and VRChat.
- Parameters
  - These are the true/false statements, sliders, and specific defined data for your avatar! This can drive animations, **blendshapes**, and toggles!
- Blendshapes/Shape Keys
  - These are specific sliders (0-100) that move specific polygons on your avatar. (eg. a "Jaw Open" blendshape will move the polygons to open your jaw)

## Getting Started

For anything with **Face Tracking (FT)**, you need some prerequisite addons to make sure everything works as smoothly as possible. This can include (but not limited to):

- Face Tracking Templates
  - These are used in Unity, and are responsible for controlling **blendshapes** on your avatars. They come with the proper parameters for receiving **OSC** input, and preset animations to drive all the shapes on your model!
- Parameter Mergers
  - This most notably refers to **VRCFury**, a popular tool used to automate and non-destructively automate the process of building avatars. 
### What you'll need

- The latest version of **Unity Editor**
- VRChat Creator Companion (VCC)
- My patcher, linked here. A full list of currently supported avatars can be found [here](https://hantnor.gumroad.com).
- A premade avatar base. (If you are using my patcher, use one of the premade supported avatars in the above list!)