import {
  vsiFileExtensionsToIcons,
  vsiFileNamesToIcons,
} from "../gen/vsiFileIconsName";
import { vsiFolderNamesToIcons } from "../gen/vsiFolderIconsName";
import { vsiFileIconsOne } from "../icons/vsiFileIconsOne";
import { vsiFileIconsTwo } from "../icons/vsiFileIconsTwo";
import { vsiFileIconsThree } from "../icons/vsiFileIconsThree";
import { vsiFileIconsFour } from "../icons/vsiFileIconsFour";
import { vsiFolderIcons } from "../icons/vsiFolderIcons";
import { vsiFolderIconsOpen } from "../icons/vsiFolderIconsOpen";

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

  let icon = "";
  if (vsiFileIconsOne[iconName]) icon = vsiFileIconsOne[iconName];
  else if (vsiFileIconsTwo[iconName]) icon = vsiFileIconsTwo[iconName];
  else if (vsiFileIconsThree[iconName]) icon = vsiFileIconsThree[iconName];
  else icon = vsiFileIconsFour[iconName];

  return (
    <img
      src={`data:image/svg+xml;base64,${btoa(icon)}`}
      alt=""
      width="24"
      height="24"
      key={fileName}
      id={fileName}
    />
  );
};

export const getVSIFolderIcon = (folderName, open = 0) => {
  let iconName = "";
  if (vsiFolderNamesToIcons[folderName]) {
    iconName = vsiFolderNamesToIcons[folderName];
  }

  if (iconName === "") iconName = "folder";

  let icon = "";
  if (open) icon = vsiFolderIconsOpen[iconName];
  else icon = vsiFolderIcons[iconName];

  return (
    <img
      src={`data:image/svg+xml;base64,${btoa(icon)}`}
      alt=""
      width="24"
      height="24"
      key={folderName}
      id={folderName}
    />
  );
};
