import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
} from "./components/api/MaterialIconApi";
import { getVSIFileIcon, getVSIFolderIcon } from "./components/api/VSIIconApi";
import materialFolderIconsNameScript from "./scripts/materialFolderIconsNameScript";

function App() {
  return (
    <div className="App">
      <img src={getMaterialFileIcon("file.js")} alt="file" width="24" />
      <img src={getMaterialFolderIcon("android")} alt="file" width="24" />
      <img src={getVSIFileIcon("file.js")} alt="file" width="24" />
      <img src={getVSIFolderIcon("android")} alt="file" width="24" />
      {materialFolderIconsNameScript()}
    </div>
  );
}

export default App;
