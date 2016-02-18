(function (w) {
	var monthNames = [
		"janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
	];

	function Events(events) {
		this.getAll = function () {
			var i = 0;
			now = new Date();
			now = now.getUTCFullYear()+'-'+(now.getUTCMonth()+1)+'-'+now.getUTCDate();
			events = events.filter(function(a){return (a.dataFim > now) ? true : false;});
			events.sort(function(a,b){return (a.dataInicio < b.dataInicio) ? false : true;});
			events.forEach(function(event){
				event.data = getTextData(event.dataInicio, event.dataFim);
				event.id = i++;
				event.distancia = 0;
			});
			return events;

		};

		this.getByTitulo = function (titulo) {
			/*jshint esnext: true */
			for (var evento of events) {
				if (evento.titulo !== titulo) continue;
				evento.data = getTextData(evento.dataInicio, evento.dataFim);
				return evento;
			}
		};
	}

	function getTextData(dataInicio, dataFim) {
		dataInicio = new Date(dataInicio);
		day1 = dataInicio.getUTCDate();
		month1 = dataInicio.getUTCMonth();
		year1 = dataInicio.getUTCFullYear();

		dataFim = new Date(dataFim);
		day2 = dataFim.getUTCDate();
		month2 = dataFim.getUTCMonth();
		year2 = dataFim.getUTCFullYear();

		if (year1 != year2) {
			return day1 + ' de ' + monthNames[month1] + ' de ' + year1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
		}

		if (month1 != month2) {
			return day1 + ' de ' + monthNames[month1] + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
		}

		if (day1 != day2) {
			return day1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
		}

		return day1 + ' de ' + monthNames[month2] + ' de ' + year2;
	};

	w.Events = Events;
})(window);
