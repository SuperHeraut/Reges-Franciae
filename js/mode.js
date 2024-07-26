mode = "1";
modebutton = document.createElement("button");
HEADER.appendChild(modebutton);
modeinner = "mode sombre";
modebutton.innerHTML = modeinner;
modebutton.setAttribute("onclick", "nightmode()");

function nightmode(){
switch (mode){
	case "1":
		style = "night"
		mode = "0";
		modeinner = "mode clair";
		break;
	case "0":
		style = "clear"
		mode = "1";
		modeinner = "mode sombre";
		break;
	}
	modebutton.innerHTML = modeinner;
	STYLESHEET.setAttribute("href", "../CSS/" + style + ".css");
};