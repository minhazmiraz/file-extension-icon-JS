import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
} from "./api/MaterialIconApi";
import {
  materialFileExtensionsToIcons,
  materialFileNamesToIcons,
} from "./gen/materialFileIconsName";
import { materialFolderNamesToIcons } from "./gen/materialFolderIconsName";

import { getVSIFileIcon, getVSIFolderIcon } from "./api/VSIIconApi";
import {
  vsiFileExtensionsToIcons,
  vsiFileNamesToIcons,
} from "./gen/vsiFileIconsName";
import { vsiFolderNamesToIcons } from "./gen/vsiFolderIconsName";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      {/* <div style={{ color: "white" }}>Material Icons: </div>
      {Object.keys(materialFileNamesToIcons).map((key) =>
        getMaterialFileIcon(key)
      )}
      {Object.keys(materialFileExtensionsToIcons).map((key) =>
        getMaterialFileIcon(key)
      )}
      {Object.keys(materialFolderNamesToIcons).map((key) =>
        getMaterialFolderIcon(key)
      )}
      {Object.keys(materialFolderNamesToIcons).map((key) =>
        getMaterialFolderIcon(key, 1)
      )}
      <br />
      <br /> */}
      <div style={{ color: "white" }}>Visual Studio Icons</div>
      <br />
      <br />
      {Object.keys(vsiFileNamesToIcons).map((key) => getVSIFileIcon(key))}
      {Object.keys(vsiFileExtensionsToIcons).map((key) => getVSIFileIcon(key))}
      {Object.keys(vsiFolderNamesToIcons).map((key) => getVSIFolderIcon(key))}
      {Object.keys(vsiFolderNamesToIcons).map((key) =>
        getVSIFolderIcon(key, 1)
      )}
    </div>
  );
}

export default App;
