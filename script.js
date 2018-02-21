$(function(){
	// Array met alle series
	// Index 2 staat voor de release date (srd = specific release date, rd = release date)
	var series = [
		["The Walking Dead", "images/twd.jpg", "srd", "26/02", "Season 7 Part 2"],
		["Westworld", "images/westworld.jpeg", "srd", "22/04", "Season 2"],
		["The 100", "images/the100.jpg", "srd", "24/04", "Season 5"],
		["13 Reasons Why", "images/13reasonswhy.jpg", "rd", "2018", "Season 2"],
		["Salvation", "images/salvation.jpg", "rd", "2018", "Season 2"],
		["The OA", "images/theoa.jpg", "rd", " FEB 2018", "Season 2"],
		["Stranger Things", "images/strangerthings.jpg", "rd", "2018", "Season 3"],
		["Sense8", "images/sense8.jpg", "rd", "2018", "Season 2 Finale"],
		["Ozark", "images/ozark.jpg", "rd", "2018", "Season 2"],
		["Mindhunter", "images/mindhunter.jpg", "rd", "2018", "Season 2"],
		["Vikings", "images/vikings.jpg", "rd", "2018", "Season 5 Part 2"],
		["House Of Cards", "images/houseofcards.jpg", "rd", "2018", "Season 6"],
		["The Expanse", "images/theexpanse.jpg", "rd", "2018", "Season 3"],
		["Mars", "images/mars.jpg", "rd", "2018", "Season 2"],
		["Game Of Thrones", "images/got.jpg", "rd", "2019", "Season 8"],
		["Star Trek Discovery", "images/startrekdiscovery.jpg", "rd", "2019", "Season 2"],
		["Dark", "images/dark.jpg", "nrd", "????", "Season 2"],
		["The Punisher", "images/thepunisher.jpg", "nrd", "????", "Season 2"],
		["Travelers", "images/travelers.jpg", "nrd", "????", "Season 3"],
		["Altered Carbon", "images/alteredcarbon.jpg", "nrd", "????", "Season 2"],
		["Sherlock", "images/sherlock.jpg", "nrd", "????", "Season 5"],
		["Glitch", "images/glitch.jpg", "nrd", "????", "Season 3"]
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

	for (var i = 0; i < series.length; i++) {
		// Maak een serie-wrapper div aan
		var newSerieWrapper = document.createElement('div');
		newSerieWrapper.id = "serie-wrapper-main-" + i;
		newSerieWrapper.style.background = 'url('+ series[i][1] +')';
		newSerieWrapper.className = 'serie-wrapper-main ' + series[i][2];
		// Maak een serie div aan
		var newSerie = document.createElement('div');
		newSerie.id = "serie-main-" + i;
		newSerie.className = 'serie';
		// Maak tekst aan die bij de serie hoort
		var newSerieTitle = document.createElement('h3');
		newSerieTitle.innerHTML = series[i][0];
		var newSerieRD = document.createElement('h4');
		newSerieRD.innerHTML = series[i][3];

		document.getElementById('main-all').appendChild(newSerieWrapper).appendChild(newSerie).appendChild(newSerieTitle);
		document.getElementById(newSerie.id).appendChild(newSerieRD);
	}

	// Forloop die de elementen aanmaakt op de juiste plaats
	for (var i = 0; i < series.length; i++) {
		// Maak een serie-wrapper div aan
		var newSerieWrapper = document.createElement('div');
		newSerieWrapper.id = "serie-wrapper-" + i;
		newSerieWrapper.style.background = 'url('+ series[i][1] +')';
		newSerieWrapper.className = 'serie-wrapper';
		// Maak een serie div aan
		var newSerie = document.createElement('div');
		newSerie.id = "serie-" + i;
		newSerie.className = 'serie';
		// Maak tekst aan die bij de serie hoort
		var newSerieTitle = document.createElement('h3');
		newSerieTitle.innerHTML = series[i][0];
		var newSerieRD = document.createElement('h4');
		newSerieRD.innerHTML = series[i][3];
		// Voeg de elementen toe aan de juiste main div
		if (series[i][2] == "srd") {
			document.getElementById('main-srd').appendChild(newSerieWrapper);
		} else if (series[i][2] == "rd") {
			document.getElementById('main-rd').appendChild(newSerieWrapper);
		} else if (series[i][2] == "nrd") {
			document.getElementById('main-nrd').appendChild(newSerieWrapper);
		} else {
			continue;
		}
		document.getElementById(newSerieWrapper.id).appendChild(newSerie);
		document.getElementById(newSerie.id).appendChild(newSerieTitle);
		document.getElementById(newSerie.id).appendChild(newSerieRD);
	}

	$('#main-all').isotope({ 
		itemSelector: '.serie-wrapper-main',
		layoutMode: 'fitRows',
		animationEngine: 'css'
	});

	$('#filter-all').on('click', function(){
		$('#main-all').isotope({filter: '.serie-wrapper-main'});
	})

	$('#filter-srd').on('click', function(){
		$('#main-all').isotope({filter: '.srd'});
	})

	$('#filter-rd').on('click', function(){
		$('#main-all').isotope({filter: '.rd'});
	})

	$('#filter-nrd').on('click', function(){
		$('#main-all').isotope({filter: '.nrd'});
	})

});



// $(function(){
// 	// Array met alle series
// 	// Index 2 staat voor de release date (srd = specific release date, rd = release date)
// 	var series = [
// 		["The Walking Dead", "images/twd.jpg", "srd", "26/02", "Season 7 Part 2"],
// 		["Westworld", "images/westworld.jpeg", "srd", "22/04", "Season 2"],
// 		["The 100", "images/the100.jpg", "srd", "24/04", "Season 5"],
// 		["13 Reasons Why", "images/13reasonswhy.jpg", "rd", "2018", "Season 2"],
// 		["Salvation", "images/salvation.jpg", "rd", "2018", "Season 2"],
// 		["The OA", "images/theoa.jpg", "rd", " FEB 2018", "Season 2"],
// 		["Stranger Things", "images/strangerthings.jpg", "rd", "2018", "Season 3"],
// 		["Sense8", "images/sense8.jpg", "rd", "2018", "Season 2 Finale"],
// 		["Ozark", "images/ozark.jpg", "rd", "2018", "Season 2"],
// 		["Mindhunter", "images/mindhunter.jpg", "rd", "2018", "Season 2"],
// 		["Vikings", "images/vikings.jpg", "rd", "2018", "Season 5 Part 2"],
// 		["House Of Cards", "images/houseofcards.jpg", "rd", "2018", "Season 6"],
// 		["The Expanse", "images/theexpanse.jpg", "rd", "2018", "Season 3"],
// 		["Mars", "images/mars.jpg", "rd", "2018", "Season 2"],
// 		["Game Of Thrones", "images/got.jpg", "rd", "2019", "Season 8"],
// 		["Star Trek Discovery", "images/startrekdiscovery.jpg", "rd", "2019", "Season 2"],
// 		["Dark", "images/dark.jpg", "nrd", "????", "Season 2"],
// 		["The Punisher", "images/thepunisher.jpg", "nrd", "????", "Season 2"],
// 		["Travelers", "images/travelers.jpg", "nrd", "????", "Season 3"],
// 		["Altered Carbon", "images/alteredcarbon.jpg", "nrd", "????", "Season 2"],
// 		["Sherlock", "images/sherlock.jpg", "nrd", "????", "Season 5"],
// 		["Glitch", "images/glitch.jpg", "nrd", "????", "Season 3"]
// 	];

// 	// Array met alle series met een specific release date
// 	var srdSeries = [];
// 	// Array met alle series met een release date (jaar)
// 	var rdSeries = [];
// 	// Array met alle series waarvan een volgend seizoen nog bevestigd moet worden
// 	var nrdSeries = [];
// 	// Forloop die alle series in de juiste array plaatst
// 	for (var i = 0; i < series.length; i++) {
// 		if (series[i][2] == "srd") {
// 			srdSeries.push(series[i]);
// 		} else if (series[i][2] == "rd") {
// 			rdSeries.push(series[i]);
// 		} else if (series[i][2] == "nrd") {
// 			nrdSeries.push(series[i]);
// 		}
// 	}

// 	// Forloop die de elementen aanmaakt op de juiste plaats
// 	for (var i = 0; i < series.length; i++) {
// 		// Maak een serie-wrapper div aan
// 		var newSerieWrapper = document.createElement('div');
// 		newSerieWrapper.id = "seriewrapper-" + i;
// 		newSerieWrapper.style.background = 'url('+ series[i][1] +')';
// 		newSerieWrapper.className = 'serie-wrapper';
// 		// Maak een serie div aan
// 		var newSerie = document.createElement('div');
// 		newSerie.id = "serie-" + i;
// 		newSerie.className = 'serie';
// 		// Maak tekst aan die bij de serie hoort
// 		var newSerieTitle = document.createElement('h3');
// 		newSerieTitle.innerHTML = series[i][0];
// 		var newSerieRD = document.createElement('h4');
// 		newSerieRD.innerHTML = series[i][3];
// 		// Voeg de elementen toe aan de juiste main div
// 		if (srdSeries.includes(series[i])) {
// 			document.getElementById('main-srd').appendChild(newSerieWrapper);
// 		} else if (rdSeries.includes(series[i])) {
// 			document.getElementById('main-rd').appendChild(newSerieWrapper);
// 		} else if (nrdSeries.includes(series[i])) {
// 			document.getElementById('main-nrd').appendChild(newSerieWrapper);
// 		} else {
// 			continue;
// 		}
// 		document.getElementById(newSerieWrapper.id).appendChild(newSerie);
// 		document.getElementById(newSerie.id).appendChild(newSerieTitle);
// 		document.getElementById(newSerie.id).appendChild(newSerieRD);
// 	}
// });






