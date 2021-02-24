import {
  materialFileExtensionsToIcons,
  materialFileNamesToIcons,
} from "../gen/materialFileIconsName";
import { materialFolderNamesToIcons } from "../gen/materialFolderIconsName";
import { materialFileIconsOne } from "../icons/materialFileIconsOne";
import { materialFileIconsTwo } from "../icons/materialFileIconsTwo";
import { materialFolderIcons } from "../icons/materialFolderIcons";
import { materialFolderIconsOpen } from "../icons/materialFolderIconsOpen";

export const getFileIcon = (fileName) => {
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

  let icon = "";
  if (materialFileIconsOne[iconName]) icon = materialFileIconsOne[iconName];
  else icon = materialFileIconsTwo[iconName];

  return (
    <img
      src={`data:image/svg+xml;base64,${btoa(icon)}`}
      alt=""
      width="24"
      height="24"
    />
  );
};

export const getFolderIcon = (folderName, open = 0) => {
  let iconName = "";
  if (materialFolderNamesToIcons[folderName]) {
    iconName = materialFolderNamesToIcons[folderName];
  }

  if (iconName === "") iconName = "folder";

  let icon = "";
  if (open) icon = materialFolderIconsOpen[iconName];
  else icon = materialFolderIcons[iconName];

  console.log(icon);

  return (
    <img
      src={`data:image/svg+xml;base64,${btoa(icon)}`}
      alt=""
      width="24"
      height="24"
    />
  );
};
