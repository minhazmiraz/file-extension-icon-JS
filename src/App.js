import { getFileIcon, getFolderIcon } from "./api/MaterialIconApi";
import { materialFileIconsOne } from "./icons/materialFileIconsOne";

function App() {
  return (
    <div className="App">
      {Object.keys(materialFileIconsOne).map((key) => getFileIcon(key))}
      {getFileIcon("sublime-project")}
      {getFolderIcon("folder-dist")}
    </div>
  );
}

export default App;
