modebutton = document.createElement("button");
modepic = document.createElement("img");
modepic.setAttribute("src", "../img/technical/" + modeinner + ".svg");
modebutton.setAttribute("onclick", "nightmode()");
HEADER.appendChild(modebutton);
modebutton.appendChild(modepic);

const nightmode = () => {
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
	modeinner = "sun";
	nightmode();
};