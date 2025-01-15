modebutton = document.createElement("button");
modepic = document.createElement("img");
modebutton.appendChild(modepic);
modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
HEADER.appendChild(modebutton);
modebutton.setAttribute("onclick", "nightmode()");
console.log(localStorage);
if(localStorage.getItem("LSmode", mode) == "0" || localStorage.getItem("LSmode", mode) == "1"){
	mode = localStorage.getItem("LSmode", mode);
	nightmode();
} else {
	style = "clear"
	mode = "1";
	localStorage.setItem("LSmode", mode);
	modeinner = "sun";
	nightmode();
}
;
function nightmode() {
	switch (mode) {
		case "1":
			style = "night";
			localStorage.setItem("LSmode", mode);
			mode = "0";
			modeinner = "moon";
			break;
		case "0":
			style = "clear";
			localStorage.setItem("LSmode", mode);
			mode = "1";
			modeinner = "sun";
			break;
	}
	console.log(localStorage.getItem("LSmode", mode));
	modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
	MODE.setAttribute("href", "../css/" + style + ".css");
};