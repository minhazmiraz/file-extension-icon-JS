import { vsiFileIcons } from "../static/vsiFileIcons";

const vsiFileIconsSvgScript = () => {
  const FILE_ICON_URL =
    "https://raw.githack.com/vscode-icons/vscode-icons/master/icons/";

  let fileIconSvg = {};

  //const icons = vsiFileIcons.supported.slice(0, 200);
  //const icons = vsiFileIcons.supported.slice(200, 400);
  //const icons = vsiFileIcons.supported.slice(400, 600);
  const icons = vsiFileIcons.supported.slice(600, 704);

  Promise.all(
    icons.map((icon) =>
      fetch(FILE_ICON_URL + "file_type_" + icon.icon + ".svg")
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

export default vsiFileIconsSvgScript;
