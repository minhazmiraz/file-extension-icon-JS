import { materialFolderIcons } from "../static/materialFolderIcons";

const materialFolderIconsSvgScript = () => {
  const FOLDER_ICON_URL =
    "https://raw.githack.com/PKief/vscode-material-icon-theme/master/icons/";

  let fileIconSvg = {};

  const icons = Object.entries(materialFolderIcons)[0][1].icons;

  //  Promise.all(icons.map((icon) => fetch(FOLDER_ICON_URL + icon.name + ".svg")))
  Promise.all(
    icons.map((icon) => fetch(FOLDER_ICON_URL + icon.name + "-open.svg"))
  )
    .then((responses) => {
      Promise.all(responses.map((response) => response.text()))
        .then((responseTexts) => {
          let svgArray = responseTexts.map((responseText) => {
            const htmlText = new DOMParser().parseFromString(
              responseText,
              "text/html"
            );
            const svg = htmlText.querySelector("svg");
            return new XMLSerializer().serializeToString(svg);
          });
          fileIconSvg = Object.fromEntries(
            icons.map((icon, i) => [icon.name, svgArray[i]])
          );
          console.log(fileIconSvg);
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
};

export default materialFolderIconsSvgScript;
