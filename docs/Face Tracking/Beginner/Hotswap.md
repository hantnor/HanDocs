---
sidebar_position: 4
---

# Hotswapping

*I need to replace my FBX quickly, but how?*

Hotswapping is useful for anyone wanting to quickly and seamlessly overwrite a file in a project. **NOTE: This is a destructive process. Always make a backup of the original file in case something goes wrong.**

This guide will describe replacing an FBX file. This can also work for any other type of file, but FBX is the most common for this approach.

## 1. FBX Location & Prep

In your project, you will have a folder or some directory designated for your original FBX file. It may be in the creator's root folder, or under a folder called `Models`.

![Image](./img2/modelfolder.png)
<hr/>

In here, you should find an FBX file represented something like this! If it does not have a preview, chances are, it may not be an FBX file. Look elsewhere!

![Image](./img2/origmodel.png)

<hr/>

**At this stage, please duplicate your model!** You always want to keep a backup of your file to revert in case of any unforseen circumstances. The duplicate will be marked with a `1` at the end of the name.

![Image](./img2/copymodel.png)

<hr/>

## 2. File Explorer

With the original file, **right-click** and select `Show in Explorer`. File explorer is the name for your Windows file searching system. It's marked with a yellow folder in a blue holder!

![Image](./img2/showexp.png)

<hr/>

When this is clicked, a new folder should appear with your original file, your backup, along with a couple `.meta` files for each.

![Image](./img2/directory1.png)

<hr/>

Now you can open a new window of File Explorer by pressing `Windows + E`. The new window should route to your new FBX you'd like to overwrite with.

![Image](./img2/directory2.png)

<hr/>

**At this stage, rename the new file to exactly match the name of the old file.** Any differences, and the file won't be overwritten. You'll need to reimport it with the correct name.

![Image](./img2/directory3.png)

<hr/>

Drag and drop the new file into the model directory. IF this doesn't let you copy the file over, you can always hit `Ctrl + C` and `Ctrl + V`.

![Image](./img2/copy.png)

<hr/>

If named correctly, you'll be given a confirmation prompt asking if you'd like to replace the existing file. Select **Replace the file in the destination**, and wait for the process to complete.

![Image](./img2/confirmation.png)

<hr/>

**You're done! Make sure to keep that backup on-hand, you'll never know when you may need it!**