import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
} from "./components/api/MaterialIconApi";
import { getVSIFileIcon, getVSIFolderIcon } from "./components/api/VSIIconApi";

function App() {
  return (
    <div className="App">
      <img src={getMaterialFileIcon("file.html")} alt="file" width="24" />
      <img src={getMaterialFolderIcon("stylesheet")} alt="file" width="24" />
      <img src={getVSIFileIcon("file.accdb")} alt="file" width="24" />
      <img src={getVSIFolderIcon("android")} alt="file" width="24" />
    </div>
  );
}

export default App;
