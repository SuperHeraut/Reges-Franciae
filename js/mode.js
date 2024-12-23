mode = "1";
modebutton = document.createElement("button");
modepic = document.createElement("img");
modebutton.appendChild(modepic);
modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
HEADER.appendChild(modebutton);
modeinner = "sun";
modebutton.setAttribute("onclick", "nightmode()");

function nightmode() {
	switch (mode) {
		case "1":
			style = "night"
			mode = "0";
			modeinner = "moon";
			break;
		case "0":
			style = "clear"
			mode = "1";
			modeinner = "sun";
			break;
	}
	modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
	STYLESHEET.setAttribute("href", "../CSS/" + style + ".css");
};