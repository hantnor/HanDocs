---
sidebar_position: 6
---

*Why do you have so many toggles?*

## Layers

On an **FX Controller**, layers are responsible for scripted avatar logic. Logic can be split for their own "micro-programs" to different layers.

### Layer Reduction
A good rule of thumb is to reduce the amount of layers you end up using in your final avatar. For example, having multiple toggles per clothing item could be set upon mulltiple layers, but it would mean less CPU load time if one layer was responsible for all clothing assets.

*The less layers you have, the happier a CPU would be, for both PC and Quest!*

### Exit Routes
Do not **dead-end** your animations! Always make sure that your animations either have an idle state or route to the red **Exit** state. Otherwise, things may stick and break! 
- *More information on this [here](https://creators.vrchat.com/avatars/animator-parameters).*

### Idle State Etiquette
- As a personal recommendation (this may not apply to all cases), make sure your idle layers/states **do not lock up your avatar's heirarchy**. 
- With idle layers, it's best recommended that they contain **nothing**. You don't have to load in any data for that state!

## Parameters

Parameters are the points of data saved to an avatar to toggle or activate specific layer paths. These can be saved with varying degrees of storage.

**At most, VRChat can store 256 bits of parameter data.**

- **Boolean**
     - A simple "on/off" switch. This can be saved as `True` or `False`.
   - This parameter type takes up `1` bits.
- **Integer**
     - This is a number saved between `0 - 255`. This is good for selecting options within a menu. These are more optimized than **floats**.
   - This parameter type takes up `8` bits.

- **Float**
     - This is a decimal value saved between `-1 - 1`.  This is mainly useful for **radial** toggles or **axis puppets**. These are not as optimized as **integers**.
   - This parameter type takes up `8` bits.

With this in mind, you may be able to condense a lot of data!
- At best, 256 boolean states can fit within a single integer!

### Parameter Drivers
[Information WIP, may come from Beanthusiast]

## Face Tracking
In its current state, face tracking is not optimized. Until it is natively implemented into the game (which may take time), unoptimized approaches are the only option. If/when development changes regarding FT, this page will reflect that!