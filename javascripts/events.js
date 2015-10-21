(function (w) {
    var monthNames = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    function Events(events) {
        this.getAll = function () {
            for (i = 0; i < events.length; i++) {
                events[i].data = this.getTextData(events[i].dataInicio, events[i].dataFim);
            }
            return events;
        };

        this.getByTitulo = function (titulo) {
            /*jshint esnext: true */
            for (var evento of events) {
                if (evento.titulo !== titulo) continue;
                evento.data = this.getTextData(evento.dataInicio, evento.dataFim);
                return evento;
            }
        };

        this.getTextData = function (dataInicio, dataFim) {
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
    }

    w.Events = Events;
})(window);
