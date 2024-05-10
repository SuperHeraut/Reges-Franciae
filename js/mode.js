modebutton = document.createElement("button");
mode = "night";
modeinner = "mode clair";
BODY.setAttribute("id", "bg" + mode);
HEADER.appendChild(modebutton);
modebutton.innerHTML = modeinner;
modebutton.setAttribute("onclick", "nightmode()");
modebutton.setAttribute("class", "button" + mode);

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
	BODY.setAttribute("id", "bg" + mode);
	modebutton.innerHTML = modeinner;
	modebutton.setAttribute("class", "button" + mode);
};