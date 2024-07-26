const LANG = document.querySelector("html");
	LANG.setAttribute("lang", "fr");
const BODY = document.querySelector("body");
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

let style = "clear";
const STYLESHEET = document.createElement("link");
	STYLESHEET.setAttribute("rel", "stylesheet");
	STYLESHEET.setAttribute("href", "../CSS/" + style + ".css");

const VARS = document.createElement("script");
	VARS.setAttribute("src", "../js/variables.js");
const MOD = document.createElement("script");
	MOD.setAttribute("src", "../js/mode.js");
const HDR = document.createElement("script");
	HDR.setAttribute("src", "../js/header.js");
const FTR = document.createElement("script");
	FTR.setAttribute("src", "../js/footer.js");

HEAD.appendChild(CHARSET);
HEAD.appendChild(VIEWPORT);
HEAD.appendChild(ICON);
HEAD.appendChild(RESETSTYLE);
HEAD.appendChild(STYLESHEET);
BODY.appendChild(VARS);
BODY.appendChild(MOD);
BODY.appendChild(HDR);
BODY.appendChild(FTR);