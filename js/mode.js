mode = "1";
modebutton = document.createElement("button");
modepic = document.createElement("img");
modebutton.appendChild(modepic);
modeinner = "sun";
modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
HEADER.appendChild(modebutton);
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
	MODE.setAttribute("href", "../css/" + style + ".css");
};