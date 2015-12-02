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
        $inner.append( template( event ) );
    });

    $('.sdc_staticmaps').on('click', function () {
        var image = $(this);
        var canvas = image.parent().find('.sdc_maps');
        var evento = eventHandler.getByTitulo(image.data('titulo'));
        var LatLng = new google.maps.LatLng(evento.localizacao.latitude,evento.localizacao.longitude);
        var options = {
            zoom: 15,
            center: LatLng
        };

        image.fadeOut(500);
        canvas.css('height', '465px');

        var map = new google.maps.Map(document.getElementById(canvas.attr('id')), options);
        new google.maps.Marker({
            position: LatLng,
            title: evento.titulo,
            map: map
        });
    });

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
