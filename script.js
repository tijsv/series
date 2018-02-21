$(function(){
	// Array met alle series
	// Index 2 staat voor de release date (srd = specific release date, rd = release date)
	var series = [
		["Game Of Thrones", "images/got.jpg", "rd", new Date(2019, 1, 0, 0, 0, 0), "Season 8"],
		["Westworld", "images/westworld.jpeg", "srd", new Date(2018, 4, 22, 0, 0, 0), "Season 2"],
		["The Walking Dead", "images/twd.jpg", "srd", new Date(2018, 2, 26, 0, 0, 0), "Season 7 Part 2"],
		["The 100", "images/the100.jpg", "srd", new Date(2018, 4, 24, 0, 0, 0), "Season 5"],
		["13 Reasons Why", "images/13reasonswhy.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2"],
		["Salvation", "images/salvation.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2"],
		["The OA", "images/theoa.jpg", "rd", new Date(2018, 2, 0, 0, 0, 0), "Season 2"],
		["Stranger Things", "images/strangerthings.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 3"],
		["Sense8", "images/sense8.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2 Finale"],
		["Ozark", "images/ozark.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2"],
		["Mindhunter", "images/mindhunter.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2"],
		["Vikings", "images/vikings.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 5 Part 2"],
		["House Of Cards", "images/houseofcards.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 6"],
		["The Expanse", "images/theexpanse.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 3"],
		["Mars", "images/mars.jpg", "rd", new Date(2018, 1, 0, 0, 0, 0), "Season 2"],
		["Star Trek Discovery", "images/startrekdiscovery.jpg", "rd", new Date(2019, 1, 0, 0, 0, 0), "Season 2"],
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

	var sort_dates = function (date1, date2) {
	  if (date1 > date2) return 1;
	  if (date1 < date2) return -1;
	  return 0;
	};

	function sortArray(array) {
	  	var dates = [];
		for (var i = 0; i < array.length; i++) {
			dates.push(array[i][3]);
		}
		dates.sort(sort_dates);
		var bin = [];
		count = 0
		for (var i = 0; i < dates.length; i++) {
			for (var j = 0; j < array.length; j++) {
				if (array[j][3] == dates[i]) {
					bin.push(array[j]);
					count =+ 1;
				} 
			}
		}
		array = bin;
		return array;
	}

	srdSeries = sortArray(srdSeries);
	rdSeries = sortArray(rdSeries);

	// Array met de gesorteerde series
	var seriesSorted = srdSeries + rdSeries + nrdSeries;
	series = srdSeries.concat(rdSeries);
	series = series.concat(nrdSeries);

	var today = new Date();

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
		var newSerieThisMonth = document.createElement('h5');
		if (series[i][2] == "srd") {
			newSerieRD.innerHTML = series[i][3].getDate() + "/" + series[i][3].getMonth();
			if (today.getFullYear() == series[i][3].getFullYear() && today.getMonth() + 1 == series[i][3].getMonth()) {
				newSerieThisMonth.innerHTML = 'Soon';
			}
		} else if (series[i][2] == "rd") {
			newSerieRD.innerHTML = series[i][3].getFullYear();
		} else {
			newSerieRD.innerHTML = series[i][3];
		}
		document.getElementById('main-all').appendChild(newSerieWrapper).appendChild(newSerie).appendChild(newSerieTitle);
		document.getElementById(newSerie.id).appendChild(newSerieRD);
		if (series[i][2] == "srd") {
			if (today.getFullYear() == series[i][3].getFullYear() && today.getMonth() + 1 == series[i][3].getMonth()) {
				document.getElementById(newSerie.id).appendChild(newSerieThisMonth);
			}
		}

	}

	// // Forloop die de elementen aanmaakt op de juiste plaats
	// for (var i = 0; i < series.length; i++) {
	// 	// Maak een serie-wrapper div aan
	// 	var newSerieWrapper = document.createElement('div');
	// 	newSerieWrapper.id = "serie-wrapper-" + i;
	// 	newSerieWrapper.style.background = 'url('+ series[i][1] +')';
	// 	newSerieWrapper.className = 'serie-wrapper';
	// 	// Maak een serie div aan
	// 	var newSerie = document.createElement('div');
	// 	newSerie.id = "serie-" + i;
	// 	newSerie.className = 'serie';
	// 	// Maak tekst aan die bij de serie hoort
	// 	var newSerieTitle = document.createElement('h3');
	// 	newSerieTitle.innerHTML = series[i][0];
	// 	var newSerieRD = document.createElement('h4');
	// 	newSerieRD.innerHTML = series[i][3];
	// 	// Voeg de elementen toe aan de juiste main div
	// 	if (series[i][2] == "srd") {
	// 		document.getElementById('main-srd').appendChild(newSerieWrapper);
	// 	} else if (series[i][2] == "rd") {
	// 		document.getElementById('main-rd').appendChild(newSerieWrapper);
	// 	} else if (series[i][2] == "nrd") {
	// 		document.getElementById('main-nrd').appendChild(newSerieWrapper);
	// 	} else {
	// 		continue;
	// 	}
	// 	document.getElementById(newSerieWrapper.id).appendChild(newSerie);
	// 	document.getElementById(newSerie.id).appendChild(newSerieTitle);
	// 	document.getElementById(newSerie.id).appendChild(newSerieRD);
	// }

	$('#main-all').isotope({ 
		itemSelector: '.serie-wrapper-main',
		layoutMode: 'fitRows',
		animationEngine: 'css'
	});

	$('#filter-all').on('click', function(){
		$('#main-all').isotope({filter: '.serie-wrapper-main'});
		$('.filter-focus').removeClass('filter-focus');
		$('#filter-all').addClass('filter-focus');
	})

	$('#filter-srd').on('click', function(){
		$('#main-all').isotope({filter: '.srd'});
		$('.filter-focus').removeClass('filter-focus');
		$('#filter-srd').addClass('filter-focus');
	})

	$('#filter-rd').on('click', function(){
		$('#main-all').isotope({filter: '.rd'});
		$('.filter-focus').removeClass('filter-focus');
		$('#filter-rd').addClass('filter-focus');
	})

	$('#filter-nrd').on('click', function(){
		$('#main-all').isotope({filter: '.nrd'});
		$('.filter-focus').removeClass('filter-focus');
		$('#filter-nrd').addClass('filter-focus');
	})

});







