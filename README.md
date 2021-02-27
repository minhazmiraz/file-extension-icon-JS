# File-Extension-Icon-JS

Use folder name and file extension specific [Material-icon](https://github.com/PKief/vscode-material-icon-theme) and [vscode-icon](https://github.com/vscode-icons/vscode-icons).

_Inspired by [vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js) and [file-icons-js](https://github.com/websemantics/file-icons-js)_

## Usage

```javascript
import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
  getVSIFileIcon,
  getVSIFolderIcon,
} from "file-extension-icon-js";

//File Icon
<img src=`${getMaterialFileIcon('index.js')}` alt="js" width="24" />

//Folder Icon
<img src=`${getMaterialFolderIcon('android')}` alt="android" width="24" />

//Open Folder Icon
<img src=`${getMaterialFolderIcon('android', 1)}` alt="android" width="24" />

//File Icon
<img src=`${getVSIFileIcon('index.js')}` alt="js" width="24" />

//Folder Icon
<img src=`${getVSIFolderIcon('android')}` alt="android" width="24" />

//Open Folder Icon
<img src=`${getVSIFolderIcon('android', 1)}` alt="android" width="24" />

```
