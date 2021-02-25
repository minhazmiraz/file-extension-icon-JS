import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
} from "./api/MaterialIconApi";
import {
  materialFileExtensionsToIcons,
  materialFileNamesToIcons,
} from "./gen/materialFileIconsName";
import { materialFolderNamesToIcons } from "./gen/materialFolderIconsName";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
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
    </div>
  );
}

export default App;
