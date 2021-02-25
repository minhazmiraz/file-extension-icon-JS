import { vsiFileIcons } from "../static/vsiFileIcons";

const vsiFileIconsNameScript = () => {
  let extToIcon = {};
  let nameToIcon = {};
  vsiFileIcons.supported.map((icon) => {
    icon.extensions &&
      icon.filename &&
      icon.extensions.map((fname) => (nameToIcon[fname] = icon.icon));
    icon.extensions &&
      !icon.filename &&
      icon.extensions.map((ext) => (extToIcon[ext] = icon.icon));
    icon.filenamesGlob &&
      icon.filenamesGlob.map((fname) => {
        icon.extensionsGlob &&
          icon.extensionsGlob.map(
            (ext) => (nameToIcon[fname + "." + ext] = icon.icon)
          );
        !icon.extensionsGlob && (nameToIcon[fname] = icon.icon);
      });
  });

  console.log(extToIcon);
  console.log(nameToIcon);
};

export default vsiFileIconsNameScript;
