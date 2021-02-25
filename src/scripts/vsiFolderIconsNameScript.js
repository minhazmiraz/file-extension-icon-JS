import { vsiFolderIcons } from "../static/vsiFolderIcons";

const vsiFolderIconsNameScript = () => {
  let nameToIcon = {};
  vsiFolderIcons.supported.map((icon) => {
    icon.extensions &&
      icon.extensions.map((folder) => (nameToIcon[folder] = icon.icon));
  });

  console.log(nameToIcon);
};

export default vsiFolderIconsNameScript;
