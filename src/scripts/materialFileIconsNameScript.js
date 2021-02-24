import { materialFileIcons } from "../static/materialFileIcons";

const materialFileIconScript = () => {
  let extToIcon = {};
  let nameToIcon = {};
  materialFileIcons.icons.map((icon) => {
    icon.fileExtensions &&
      icon.fileExtensions.map((ext) => (extToIcon[ext] = icon.name));
    icon.fileNames &&
      icon.fileNames.map((fname) => (nameToIcon[fname] = icon.name));
  });

  console.log(extToIcon);
  console.log(nameToIcon);
};

export default materialFileIconScript;
