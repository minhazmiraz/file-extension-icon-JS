import { materialFolderIcons } from "../static/materialFolderIcons";

const materialFolderIconScript = () => {
  let nameToIcon = {};
  materialFolderIcons.map((folder) => {
    folder.icons &&
      folder.icons.map((icon) =>
        icon.folderNames.map((name) => (nameToIcon[name] = icon.name))
      );
  });

  console.log(nameToIcon);
};

export default materialFolderIconScript;
