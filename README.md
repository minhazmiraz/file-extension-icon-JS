# File-Extension-Icon-JS

Use folder name and file extension specific [Material-icon](https://github.com/PKief/vscode-material-icon-theme) and [vscode-icon](https://github.com/vscode-icons/vscode-icons).

_Inspired by [vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js) and [file-icons-js](https://github.com/websemantics/file-icons-js)_

## Install

````
    npm i file-extension-icon-jsp```

## Usage

```javascript
import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
  getVSIFileIcon,
  getVSIFolderIcon,
} from "file-extension-icon-js";

<img src=`${getMaterialFileIcon('index.js')}` alt="" width="24" />

````
