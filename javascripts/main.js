(function() {
  //onde pagina sera gerada
  var $eventsContainer = $('#events');
  //usando underscore (_) para gerar HTML
  var eventTemplate = _.template($('#saia-de-casa-template').html());
  var eventHandler = null;

  // a ordem atual dos eventos na página.
  // DATE ou DISTANCE
  var ordering = 'DATE';

  fetchEvents();
  configureOrdering();

  function fetchEvents() {
    $.ajax({
      url: '/javascripts/data/events.json',
      type: 'GET',
      dataType: 'json',
      async: true,
      success: function onSuccess(data) {
        onEventsLoaded(data.events);
      }
    });
  }

  function onEventsLoaded(events) {
    eventHandler = new Events(events);
    //o objeto de eventos
    events = eventHandler.getAll();

    appendEvents(events);
    addDistanceToEvents(events);
    $(document).on('click', '.sdc_staticmaps', onEventImageClick);
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

      // depois de atualizar a distância de todos,
      // habilita a ordenação por distância
      enableOrderingByDistance();
    });
  }

  function createEventEl(event) {
    var eventEl = $(eventTemplate(event));
    eventEl.attr('id', 'event-' + event.id);
    eventEl.data('id', event.id);
    if (eventHandler.alreadyHappened(event))
      eventEl.addClass('past');

    return eventEl;
  }

  /**
   * Adiciona os eventos ao documento,
   * na ordem que estiverem, removendo
   * o que estiver listado.
   */
  function appendEvents(events) {
    $eventsContainer.empty();

    events.forEach(function(event) {
      var eventEl = createEventEl(event);
      $eventsContainer.append(eventEl);
    });

    addAnchorsToHeadings();
  }

  /**
   * Atualiza as informações do evento
   * no documento.
   */
  function updateEvent(event) {
    var currentEl = $eventsContainer.children('#event-' + event.id);

    var eventEl = createEventEl(event);
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

  function configureOrdering() {
    $(document).on('click', '#ordering a', function() {
      var $el = $(this);
      ordering = $el.data('order');

      $('#ordering a').removeClass('active');
      $el.addClass('active');

      appendEvents(eventHandler.getAll(ordering));

      return false;
    });
  }

  function enableOrderingByDistance() {
    if ($('#ordering [data-order=DISTANCE]').length)
      // já está habilitado...
      return;

    var menuItemTemplate = _.template($('#order-menu-item-template').html());
    var menuItem = menuItemTemplate({
      key: 'DISTANCE',
      label: 'distância'
    });

    $('#ordering ul').append(menuItem);
  }
})();
