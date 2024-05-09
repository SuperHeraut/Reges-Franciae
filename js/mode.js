mode = "clear";
modeinner = "mode sombre";
modebutton = document.createElement("button");
modebutton.innerHTML = modeinner;
modebutton.setAttribute("class", "nightmode");
modebutton.setAttribute("onclick", "nightmode()");
HEADER.appendChild(modebutton);

function nightmode(){
switch (mode){
	case "clear":
		modeinner = "mode clair";
		mode = "night";
		break;
	case "night":
		mode = "clear";
		modeinner = "mode sombre";
		break;
	}
	BODY.setAttribute("class", mode);
	modebutton.innerHTML = modeinner;
};