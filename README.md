# File-Extension-Icon-JS

Use [Material-icon](https://github.com/PKief/vscode-material-icon-theme) and [vscode-icon](https://github.com/vscode-icons/vscode-icons) according to folder name and file extension.

_Inspired by [vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js)_

## Usage

```javascript
import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
  getVSIFileIcon,
  getVSIFolderIcon,
} from "file-extension-icon-js";

<img src=`${getMaterialFileIcon('index.js')}` alt="" width="24" />

```
