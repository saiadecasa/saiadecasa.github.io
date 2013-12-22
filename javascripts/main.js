(function(){
    // pegar todos os h4 com id
    var headings = $( "h4[id]" );

    // adicionar link em todos os h4
    headings.each(function() {
        console.log(this);

        // pegar conteúdo atual
        var content = this.innerHTML;
        console.log(content);

        // monta slug
        var slug = getSlug(content);
        console.log(slug);

        // colocar uma âncora no conteúdo
        content = '<a class="anchor" href="#' + slug + '" name="' + slug + '">'
            + '<span class="awesome awesome-link"></span></a>' + content;

        // troca content
        this.innerHTML = content;

        // remove id do h4
        this.id = null;
    });

})();
