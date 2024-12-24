HTML.setAttribute("lang", "fr");

HEAD.appendChild(CHARSET);
	CHARSET.setAttribute("charset", "UTF-8");

HEAD.appendChild(VIEWPORT);
	VIEWPORT.setAttribute("name", "viewport");
	VIEWPORT.setAttribute("content", "width=device-width, initial-scale=1.0");

HEAD.appendChild(ICON);
	ICON.setAttribute("rel", "icon");
	ICON.setAttribute("type", "image/x-icon");
	ICON.setAttribute("href", "../img/technical/favicon.svg");

HEAD.appendChild(RESETSTYLE);
	RESETSTYLE.setAttribute("rel", "stylesheet");
	RESETSTYLE.setAttribute("href", "../CSS/reset.css");

HEAD.appendChild(STYLESHEET);
	STYLESHEET.setAttribute("rel", "stylesheet");
	STYLESHEET.setAttribute("href", "../CSS/style.css");

HEAD.appendChild(MODE);
	MODE.setAttribute("rel", "stylesheet");
	MODE.setAttribute("href", "../CSS/" + style + ".css");
