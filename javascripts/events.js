(function(w) {
  var monthNames = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  var sortingFunctions = {
    date: function orderEventByDate(a, b) {
      return a.dataInicio > b.dataInicio ? 1 : -1;
    },
    distance: function orderEventByDistance(a, b) {
      return a.distancia > b.distancia ? 1 : -1;
    }
  };

  function Events(events) {
    var context = this;
    events = events || [];

    // arrumando os objetos de eventos,
    // adicionando propriedades necessárias
    events.forEach(function(event, index) {
      event.id = index;
      event.data = getTextData(event.dataInicio, event.dataFim);
      event.distancia = 0;
    });

    this.getAll = function(orderBy) {
      // ordem padrão é pela data do evento (mais próximos primeiro)
      orderBy = (orderBy || 'date').toLowerCase();

      // ordenar eventos antes de retornar
      return events.sort(sortingFunctions[orderBy]);
    };

    this.getById = function(id) {
      return events.filter(function(event) {
        return event.id == id;
      })[0];
    };

    this.getByTitulo = function(titulo) {
      /*jshint esnext: true */
      for (var evento of events) {
        if (evento.titulo !== titulo) continue;
        evento.data = getTextData(evento.dataInicio, evento.dataFim);
        return evento;
      }
    };

    /**
     * Retorna true se o evento já aconteceu (`dataFim` está no passado),
     * ou false caso esteja no futuro.
     */
    this.alreadyHappened = function(event) {
      var now = convertDateToUTCISOString(new Date());
      return event.dataFim < now;
    };

    function getTextData(dataInicio, dataFim) {
      dataInicio = new Date(dataInicio);
      var day1 = dataInicio.getUTCDate();
      var month1 = dataInicio.getUTCMonth();
      var year1 = dataInicio.getUTCFullYear();

      dataFim = new Date(dataFim);
      var day2 = dataFim.getUTCDate();
      var month2 = dataFim.getUTCMonth();
      var year2 = dataFim.getUTCFullYear();

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
    }
  }

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function convertDateToUTCISOString(date) {
    if (!date) return '';
    return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1, 2, '0') + '-' + pad(date.getUTCDate(), 2, '0');
  }

  w.Events = Events;
})(window);
