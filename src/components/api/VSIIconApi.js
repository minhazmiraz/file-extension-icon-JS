import { convertToBase64 } from "../common/Utils";
import { vsiFileExtensionsToIcons, vsiFileNamesToIcons } from "../gen/vsiFileIconsName";
import { vsiFolderNamesToIcons } from "../gen/vsiFolderIconsName";
import Icons from "../icons/index";

export const getVSIFileIcon = (fileName) => {
	let splitName = fileName.split(".");
	let iconName = "";

	while (splitName.length) {
		let curName = splitName.join(".");
		if (vsiFileNamesToIcons[curName]) {
			iconName = vsiFileNamesToIcons[curName];
			break;
		}
		if (vsiFileExtensionsToIcons[curName]) {
			iconName = vsiFileExtensionsToIcons[curName];
			break;
		}

		splitName.shift();
	}

	if (iconName === "") iconName = "file";

	let icon = Icons.vsiFileIcons
		.map((vsiFileIcon) => (vsiFileIcon[iconName] ? vsiFileIcon[iconName] : ""))
		.filter((item) => item);

	return `data:image/svg+xml;base64,${convertToBase64(icon[0])}`;
};

export const getVSIFolderIcon = (folderName, open = 0) => {
	let iconName = "";
	if (vsiFolderNamesToIcons[folderName]) {
		iconName = vsiFolderNamesToIcons[folderName];
	}

	if (iconName === "") iconName = "folder";

	let icon = "";
	if (open) icon = Icons.vsiFolderIconsOpen[iconName];
	else icon = Icons.vsiFolderIcons[iconName];

	return `data:image/svg+xml;base64,${convertToBase64(icon)}`;
};
