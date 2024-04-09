---
sidebar_position: 1
---

# Welcome!

This site will serve as a reference point for troubleshooting, and is a simplified, streamlined version of Benacle's Face Tracking Docs, found [here](https://docs.vrcft.io/). If you need some documentation that's more simplified, and that focuses primarily on **basic avatar setup**, you've come to the right place!

## Blendshapes, OSC, What's going on?!

This may all be overwhelming for a first-timer, and that's completely okay! I was in the same boat when I first got my headset, and I had slammed my head onto my desk trying to understand it all. Here's a rundown of some common terms you may run into, whether they're here or elsewhere:

- OSC
- FT
- Parameters
- Blendshapes/Shape Keys

## Getting Started

For anything with **Face Tracking (FT)**, you need some prerequisite addons to make sure everything works as smoothly as possible. This can include (but not limited to):

- Face Tracking Templates
  - These are used in Unity, and are responsible for controlling **blendshapes** on your avatars. They come with the proper parameters for receiving **OSC** input, and preset animations to drive all the shapes on your model!
- Parameter Mergers
  - This most notably refers to **VRCFury**, a popular tool used to automate and non-destructively automate the process of building avatars. 
### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
