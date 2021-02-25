import { getMaterialFileIcon } from "./api/MaterialIconApi";
import { getVSIFileIcon } from "./api/VSIIconApi";

function App() {
  return (
    <div className="App">
      <img src={getMaterialFileIcon("file.html")} alt="file" width="24" />
      <img src={getVSIFileIcon("file.acc")} alt="file" width="24" />
    </div>
  );
}

export default App;
