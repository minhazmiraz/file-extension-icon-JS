import { getMaterialFileIcon, getMaterialFolderIcon } from "./components/api/MaterialIconApi";
import { getVSIFileIcon, getVSIFolderIcon } from "./components/api/VSIIconApi";

function App() {
	return (
		<div className="App" style={{ textAlign: "center" }}>
			<h4 style={{ paddingLeft: "5px" }}>Material File Icons sample</h4>
			<img src={getMaterialFileIcon("file.js")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.c")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.cpp")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.exe")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.java")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.gradle")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.ts")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.php")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.html")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.jsm")} alt="file" width="24" />
			<img src={getMaterialFileIcon("file.njsproj")} alt="file" width="24" />

			<h4 style={{ paddingLeft: "5px" }}>Material Folder Icons sample</h4>
			<img src={getMaterialFolderIcon("android")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("android", 1)} alt="file" width="24" />

			<img src={getMaterialFolderIcon("components")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("components", 1)} alt="file" width="24" />

			<img src={getMaterialFolderIcon("dist")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("dist", 1)} alt="file" width="24" />

			<img src={getMaterialFolderIcon("assets")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("assets", 1)} alt="file" width="24" />

			<img src={getMaterialFolderIcon("api")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("api", 1)} alt="file" width="24" />

			<img src={getMaterialFolderIcon("src")} alt="file" width="24" />
			<img src={getMaterialFolderIcon("src", 1)} alt="file" width="24" />

			<h4 style={{ paddingLeft: "5px" }}>VSI File Icons sample</h4>
			<img src={getVSIFileIcon("file.js")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.c")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.cpp")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.exe")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.java")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.gradle")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.ts")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.php")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.html")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.jsm")} alt="file" width="24" />
			<img src={getVSIFileIcon("file.njsproj")} alt="file" width="24" />

			<h4 style={{ paddingLeft: "5px" }}>VSI Folder Icons sample</h4>
			<img src={getVSIFolderIcon("android")} alt="file" width="24" />
			<img src={getVSIFolderIcon("android", 1)} alt="file" width="24" />

			<img src={getVSIFolderIcon("components")} alt="file" width="24" />
			<img src={getVSIFolderIcon("components", 1)} alt="file" width="24" />

			<img src={getVSIFolderIcon("dist")} alt="file" width="24" />
			<img src={getVSIFolderIcon("dist", 1)} alt="file" width="24" />

			<img src={getVSIFolderIcon("assets")} alt="file" width="24" />
			<img src={getVSIFolderIcon("assets", 1)} alt="file" width="24" />

			<img src={getVSIFolderIcon("api")} alt="file" width="24" />
			<img src={getVSIFolderIcon("api", 1)} alt="file" width="24" />

			<img src={getVSIFolderIcon("src")} alt="file" width="24" />
			<img src={getVSIFolderIcon("src", 1)} alt="file" width="24" />
		</div>
	);
}

export default App;
