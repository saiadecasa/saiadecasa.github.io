(function(){

    //onde pagina sera gerada
    var $inner = $('#main_content');

    //o objeto de eventos
    var events = Events.getAll(); 

    //usando underscore (_) para gerar HTML
    var template = _.template( $('#saia-de-casa-template').html() );


    events.forEach(function( event ){
        $inner.append( template( event ) );
    });

    //pegar todos os h4
    var headings = $( "h4" );

    // adicionar link em todos os h4
    headings.each(function() {

        // pegar conteúdo atual
        var content = this.innerHTML;

        if (this.id) {
            // usar o id da tag, se houver
            var link = this.id;
            // remover id do h4
            this.id = null;
        } else {
            // monta slug, se não houver id
            var link = getSlug(content);
        }

        // colocar link no conteúdo
        content = '<a class="anchor" href="#' + link + '" name="' + link + '">'
            + '<span class="awesome awesome-link"></span></a>' + content;

        // trocar content
        this.innerHTML = content;
    });
})();
