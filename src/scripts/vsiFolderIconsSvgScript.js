import { vsiFolderIcons } from "../static/vsiFolderIcons";

const vsiFolderIconsSvgScript = () => {
  const FOLDER_ICON_URL =
    "https://raw.githack.com/vscode-icons/vscode-icons/master/icons/";

  let fileIconSvg = {};

  const icons = vsiFolderIcons.supported;

  Promise.all(
    icons.map(
      (icon) =>
        fetch(FOLDER_ICON_URL + "folder_type_" + icon.icon + "_opened.svg")
      //fetch(FOLDER_ICON_URL + "folder_type_" + icon.icon + ".svg")
    )
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
            icons.map((icon, i) => [icon.icon, svgArray[i]])
          );
          console.log(fileIconSvg);
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
};

export default vsiFolderIconsSvgScript;
