---
sidebar_position: 1
---

## Important
To access and download the latest version of the patcher [download it as a ZIP file here!](https://github.com/hantnor/FTPatcher).

# Face Tracking Patcher
Using "Batch" (.bat) files, showing proof of purchase, and TOS concerns are a thing of the past! With **FTPatcher**, you can include an in-editor pop-up window to easily patch edits to your model! No Unity experience is necessary for the recipient.

### Note
This is listed primarily for the use of **face tracking**, but this can be used for any model edits, such as body modification, revamps, and other mesh edits. Use this to your heart's content. :)

# Set-up:
 1. Create a patch file using **hdiffz.exe**: https://github.com/sisong/HDiffPatch
    - In a command prompt, use ```cd``` to route to the directory where **hdiffz.exe** is located.
    - Run the following line in a command line:
 ```hdiffz.exe "NON-FT-Original.fbx" "FT-Edited.fbx" patch.bin``` 
    - Both FBX files should be in the same directory as the hdiffz.exe executable. 
       - The 'NON-FT-Original.fbx' file is the original FBX that was edited to have the Face Tracking blendshapes. 
       - The 'FT-Edited.fbx' file the edited FBX that has the FT blendshapes. This is the FBX that will be produced when the original FBX is patched.
       - 'patch.bin' stitches on anything **NON-FT-Original.fbx** doesn't have, that **FT-Edited.fbx** does

 2. Set up your package folder for the model you're patching.
    - The default directory for this template is ```FT-Patcher/FT-Root-Folder/```. which can be changed if you'd like. **Make sure you update Orchestrator.cs with the proper directory changes!**
 
 3. Configure the Orchestrator script to work with the FBX.
    - Rename the placeholder to the name of the fbx you are patching
    - You can search for '@Config' in the file to find all the places where things need to be adjusted for the model.
    
   ```Ctrl + F``` to find all instances of the placeholder, ```Ctrl + F2``` to edit all instances.
