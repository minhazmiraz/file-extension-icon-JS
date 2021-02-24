import { materialFileIcons } from "../static/materialFileIcons";

const materialFileIconsSvgScript = () => {
  const FILE_ICON_URL =
    "https://raw.githack.com/PKief/vscode-material-icon-theme/master/icons/";

  let fileIconSvg = {};

  //const icons = materialFileIcons.icons.slice(0, 166);
  const icons = materialFileIcons.icons.slice(166, 332);

  Promise.all(icons.map((icon) => fetch(FILE_ICON_URL + icon.name + ".svg")))
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

export default materialFileIconsSvgScript;
