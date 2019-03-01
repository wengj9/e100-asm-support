# easm (E100 Assembly Syntax support)

This extension is used to support E100 syntax and is based off of Alex House's [Sublime Text addon](https://github.com/ahouse101/SublimeE100Assembly).
This also takes inspiration from an [LC2K addon](https://github.com/mookie1097/lc2k) by mookie1097 for the hover info.

## Installation

One way to install the plugin is to clone the repository and run `vsce package` to get an VSIX file and install that manually. The extension is also now on the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=wengj9.e100-asm-support), so feel free to download from there too!

## Current Problems

* Extension still doesn't detect comments after the instructions on the line (something to do with TextMate grammars?)