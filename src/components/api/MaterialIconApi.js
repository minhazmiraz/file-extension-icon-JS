import { convertToBase64 } from "../common/Utils";
import {
	materialFileExtensionsToIcons,
	materialFileNamesToIcons,
} from "../gen/materialFileIconsName";
import { materialFolderNamesToIcons } from "../gen/materialFolderIconsName";
import Icons from "../icons/index";

export const getMaterialFileIcon = (fileName) => {
	fileName = fileName.toLowerCase();
	let splitName = fileName.split(".");
	let iconName = "";

	while (splitName.length) {
		let curName = splitName.join(".");
		if (materialFileNamesToIcons[curName]) {
			iconName = materialFileNamesToIcons[curName];
			break;
		}
		if (materialFileExtensionsToIcons[curName]) {
			iconName = materialFileExtensionsToIcons[curName];
			break;
		}

		splitName.shift();
	}

	if (iconName === "") iconName = "file";

	let icon = Icons.materialFileIcons
		.map((materialFileIcon) => (materialFileIcon[iconName] || ""))
		.filter((item) => item);

	return `data:image/svg+xml;base64,${convertToBase64(icon[0])}`;
};

export const getMaterialFolderIcon = (folderName, open = 0) => {
	let iconName = "";
	if (materialFolderNamesToIcons[folderName]) {
		iconName = materialFolderNamesToIcons[folderName];
	}

	if (iconName === "") iconName = "folder";

	let icon = "";
	if (open) icon = Icons.materialFolderIconsOpen[iconName];
	else icon = Icons.materialFolderIcons[iconName];

	return `data:image/svg+xml;base64,${convertToBase64(icon)}`;
};
