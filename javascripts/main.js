(function(){

	//onde pagina sera gerada
	var $inner = $('#main_content');

	var eventsData = [];

	$.ajax({
		url: '/javascripts/data/events.json',
		type: 'GET',
		dataType: 'json',
		async: false,
		success: function(data) {
			eventsData = data.events;
		}
	});

	var eventHandler = new Events(eventsData);

	//o objeto de eventos
	var events = eventHandler.getAll();

	//usando underscore (_) para gerar HTML
	var template = _.template( $('#saia-de-casa-template').html() );

	events.forEach(function( event ){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var directionsService = new google.maps.DirectionsService();
				var request = {
					origin: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
					destination: new google.maps.LatLng(event.localizacao.latitude,event.localizacao.longitude),
					travelMode: google.maps.TravelMode.DRIVING,
				};

				var distancia = 0;
				directionsService.route(request, function(result, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						for (var j = 0; j < result.routes[0].legs.length; j++) {
							distancia += result.routes[0].legs[j].distance.value;
						}
						event.distancia = Math.round(distancia/100)/10;
					}
					$inner.append( template( event ) );
				});
			});
		} else {
			$inner.append( template( event ) );
		}
	});

	setTimeout(function () {
		$('.sdc_staticmaps').on('click', function () {
			var image = $(this);
			var canvas = image.parent().find('.sdc_maps');
			var evento = eventHandler.getByTitulo(image.data('titulo'));
			var LatLngEvent = new google.maps.LatLng(evento.localizacao.latitude,evento.localizacao.longitude);
			var options = {
				zoom: 15,
				center: LatLngEvent
			};

			image.fadeOut(500);
			canvas.css('height', '465px');

			var map = new google.maps.Map(document.getElementById(canvas.attr('id')), options);
			if (navigator.geolocation) {
				var options = {
					map: map
				};

				var directionsService = new google.maps.DirectionsService();
				var directionsDisplay = new google.maps.DirectionsRenderer(options);

				navigator.geolocation.getCurrentPosition(function (position) {
					LatLangUsu = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
					var request = {
						origin: LatLangUsu,
						destination: LatLngEvent,
						travelMode: google.maps.TravelMode.DRIVING,
					};
					
					directionsService.route(request, function(result, status) {
						if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(result);
						}
					});
					
				});
			} else {
				new google.maps.Marker({
					position: LatLngEvent,
					title: evento.titulo,
					map: map
				});
			}
		});
	}, 2000);

	//pegar todos os h4
	var headings = $( "h4" );

	// adicionar link em todos os h4
	headings.each(function() {

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
})();
