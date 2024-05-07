const LANG = document.querySelector("html").setAttribute("lang", "fr");

const HEAD = document.querySelector("head");

const CHARSET = document.createElement("meta");
CHARSET.setAttribute("charset", "UTF-8");

const VIEWPORT = document.createElement("meta");
VIEWPORT.setAttribute("name", "viewport");
VIEWPORT.setAttribute("content", "width=device-width, initial-scale=1.0");

const ICON = document.createElement("link");
ICON.setAttribute("rel", "icon");
ICON.setAttribute("type", "image/x-icon");
ICON.setAttribute("href", "../img/technical/favicon.ico");

const RESETSTYLE = document.createElement("link");
RESETSTYLE.setAttribute("rel", "stylesheet");
RESETSTYLE.setAttribute("href", "../CSS/reset.css");

const STYLE = document.createElement("link");
STYLE.setAttribute("rel", "stylesheet");
STYLE.setAttribute("href", "../CSS/styles.css");

HEAD.appendChild(CHARSET);
HEAD.appendChild(VIEWPORT);
HEAD.appendChild(ICON);
HEAD.appendChild(RESETSTYLE);
HEAD.appendChild(STYLE);

const VARS = document.createElement("script");
VARS.setAttribute("src", "../js/variables.js");
const HDR = document.createElement("script");
HDR.setAttribute("src", "../js/header.js");
const FTR = document.createElement("script");
FTR.setAttribute("src", "../js/footer.js");
const BODY = document.querySelector("body");
BODY.appendChild(VARS);
BODY.appendChild(HDR);
BODY.appendChild(FTR);