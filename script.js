$(function(){
	// Array met alle series
	// Index 2 staat voor de release date (srd = specific release date, rd = release date)
	var series = [
		["The Walking Dead", "images/twd.jpg", "srd", "26/02"],
		["Westworld", "images/westworld.jpeg", "srd", "22/04"],
		["The 100", "images/the100.jpg", "srd", "24/04"],
		["13 Reasons Why", "images/13reasonswhy.jpg", "rd", "2018"],
		["Dark", "images/dark.jpg", "nrd", "????"]
	];

	// Array met alle series met een specific release date
	var srdSeries = [];
	// Array met alle series met een release date (jaar)
	var rdSeries = [];
	// Array met alle series waarvan een volgend seizoen nog bevestigd moet worden
	var nrdSeries = [];
	// Forloop die alle series in de juiste array plaatst
	for (var i = 0; i < series.length; i++) {
		if (series[i][2] == "srd") {
			srdSeries.push(series[i]);
		} else if (series[i][2] == "rd") {
			rdSeries.push(series[i]);
		} else if (series[i][2] == "nrd") {
			nrdSeries.push(series[i]);
		}
	}

	// Forloop die de elementen aanmaakt op de juiste plaats
	for (var i = 0; i < series.length; i++) {
		// Maak een serie-wrapper div aan
		var newSerieWrapper = document.createElement('div');
		newSerieWrapper.id = "seriewrapper-" + i;
		newSerieWrapper.style.background = 'url('+ series[i][1] +')';
		newSerieWrapper.className = 'serie-wrapper';
		// Maak een serie div aan
		var newSerie = document.createElement('div');
		newSerie.id = "serie-" + i;
		newSerie.className = 'serie';
		// Maak tekst aan die bij de serie hoort
		var newSerieTitle = document.createElement('h3');
		newSerieTitle.innerHTML = series[i][0];
		// Voeg de elementen toe aan de juiste main div
		if (srdSeries.includes(series[i])) {
			document.getElementById('main-srd').appendChild(newSerieWrapper);
		} else if (rdSeries.includes(series[i])) {
			document.getElementById('main-rd').appendChild(newSerieWrapper);
		} else if (nrdSeries.includes(series[i])) {
			document.getElementById('main-nrd').appendChild(newSerieWrapper);
		} else {
			continue;
		}
		document.getElementById(newSerieWrapper.id).appendChild(newSerie);
		document.getElementById(newSerie.id).appendChild(newSerieTitle);
	}
});



