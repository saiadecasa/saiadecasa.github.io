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
        var $this = $(this);
        var $canvas = $this.parent().find('.sdc_maps');
        var evento = eventHandler.getByTitulo($this.data('titulo'));

        if ($canvas.data('rendered') === 0) {
            $canvas.html('<br><iframe src="' + evento.embed_link + '" width="100%" height="450" frameborder="0" style="border:0"></iframe>');
            $this.fadeOut(500);
            $canvas.show();
        }
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
