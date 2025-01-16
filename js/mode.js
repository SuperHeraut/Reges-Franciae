modeButton = document.createElement("button");
modePic = document.createElement("img");
modePic.setAttribute("src", "../img/technical/" + modeInner + ".svg");
modeButton.setAttribute("onclick", "nightmode()");
HEADER.appendChild(modeButton);
modeButton.appendChild(modePic);
LOGO.before(modeButton);

const nightmode = () => {
	switch (mode) {
		case "1":
			logoMode = "night-";
			style = "night";
			localStorage.setItem("LSmode", mode);
			mode = "0";
			modeInner = "moon";
			break;

		case "0":
			logoMode = "";
			style = "clear";
			localStorage.setItem("LSmode", mode);
			mode = "1";
			modeInner = "sun";
			break;
	}

	console.log(localStorage.getItem("LSmode", mode));
	modePic.setAttribute("src", "../img/technical/" + modeInner + ".svg");
	MODE.setAttribute("href", "../css/" + style + ".css");
	LOGO.setAttribute("src", "../img/technical/" + logoMode + "logo.svg");
};

//localStorage used to keep ðe defined preferred þeme during ſeſsion.
//ðe reﬅ sets ðe þeme.
if(localStorage.getItem("LSmode", mode) == "0" ||
	localStorage.getItem("LSmode", mode) == "1")
{
	mode = localStorage.getItem("LSmode", mode);
	nightmode();
} else {
	style = "clear"
	mode = "1";
	localStorage.setItem("LSmode", mode);
	modeInner = "sun";
	nightmode();
};