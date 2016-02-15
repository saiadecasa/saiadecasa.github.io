(function() {
  //onde pagina sera gerada
  var $eventsContainer = $('#events');

  fetchEvents();


  $(document).on('click', '.sdc_staticmaps', onEventImageClick);

  function fetchEvents() {
    $.ajax({
      url: '/javascripts/data/events.json',
      type: 'GET',
      dataType: 'json',
      async: false,
      success: function onSuccess(data) {
        onEventsLoaded(data.events);
      }
    });
  }

  function onEventsLoaded(events) {
    var eventHandler = new Events(events);
    //o objeto de eventos
    events = eventHandler.getAll();

    appendEvents(events);
    addDistanceToEvents(events);
  }

  function onEventImageClick(e) {
    var image = $(this);
    var evento = eventHandler.getById(image.data('id'));
    var canvas = image.siblings('.sdc_maps');
    var eventLatLng = new google.maps.LatLng(evento.localizacao.latitude, evento.localizacao.longitude);
    var options = {
      zoom: 15,
      center: eventLatLng
    };

    image.fadeOut(500);
    canvas.css('height', '465px');

    var map = new google.maps.Map(canvas.get(0), options);
    // enquanto a rota não carrega, mostra o marker normalmente
    var marker = new google.maps.Marker({
      position: eventLatLng,
      title: evento.titulo,
      map: map
    });

    // mostra a rota da posição do usuário até o evento, de carro
    getUserPosition(function onSuccess(userPosition) {
      var userLatLng = new google.maps.LatLng(userPosition.coords.latitude, userPosition.coords.longitude);
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
      });

      var request = {
        origin: userLatLng,
        destination: eventLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
          // remove o marker
          marker.setMap(null);
        }
      });
    });
  }

  /**
   * Pega a localização atual do usuário
   * e atualiza cada evento com a distância
   * do usuário até ele.
   */
  function addDistanceToEvents(events) {
    getUserPosition(function onSuccess(userPosition) {
      var directionsService = new google.maps.DirectionsService();
      events.forEach(function(event) {
        var request = {
          origin: new google.maps.LatLng(userPosition.coords.latitude, userPosition.coords.longitude),
          destination: new google.maps.LatLng(event.localizacao.latitude, event.localizacao.longitude),
          travelMode: google.maps.TravelMode.DRIVING,
        };

        var distancia = 0;
        directionsService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            for (var j = 0; j < result.routes[0].legs.length; j++) {
              distancia += result.routes[0].legs[j].distance.value;
            }
            event.distancia = Math.round(distancia / 100) / 10;
          }

          updateEvent(event);
        });
      });
    });
  }

  /**
   * Adiciona os eventos ao documento,
   * na ordem que estiverem, removendo
   * o que estiver listado.
   */
  function appendEvents(events) {
    //usando underscore (_) para gerar HTML
    var template = _.template($('#saia-de-casa-template').html());
    $eventsContainer.empty();

    events.forEach(function(event) {
      var eventEl = $(template(event));
      $eventsContainer.append(eventEl);
      eventEl.attr('id', 'event-' + event.id);
      eventEl.data('id', event.id)
    });

    addAnchorsToHeadings();
  }

  /**
   * Atualiza as informações do evento
   * no documento.
   */
  function updateEvent(event) {
    //usando underscore (_) para gerar HTML
    var template = _.template($('#saia-de-casa-template').html());
    var currentEl = $eventsContainer.children('#event-' + event.id);

    var eventEl = $(template(event));
    eventEl.attr('id', 'event-' + event.id)
    eventEl.data('id', event.id)

    currentEl.replaceWith(eventEl);

    addAnchorsToHeadings();
  }

  function getUserPosition(onSuccess, onError) {
    if (!navigator.geolocation)
      onError && onError({
        code: -1,
        message: 'Geolocation not supported'
      });

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  function addAnchorsToHeadings() {
    //pegar todos os h4
    var headings = $("h4");

    // adicionar link em todos os h4
    headings.each(function() {
      if ($(this).children('.anchor').length)
        return; // esse hading já tem link

      // pegar conteúdo atual
      var content = this.innerHTML;
      var link = '';

      if (this.id) {
        // usar o id da tag, se houver
        link = this.id;
        // remover id do h4
        this.id = null;
      } else {
        // monta slug, se não houver id
        link = getSlug(content);
      }

      // colocar link no conteúdo
      content = '<a class="anchor" href="#' + link + '" name="' + link + '">' +
        '<span class="awesome awesome-link"></span></a>' + content;

      // trocar content
      this.innerHTML = content;
    });
  }
})();
