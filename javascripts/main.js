(function(){
    // pegar todos os h4 com id
    var headings = $( "h4[id]" );

    // adicionar link em todos os h4
    headings.each(function() {
        console.log(this);

        // pegar conteúdo atual
        var content = this.innerHTML;
        console.log(content);

        // pegar o id
        var id = this.id;
        console.log(id);

        // colocar uma âncora no conteúdo
        content = '<a href="#' + id + '">' + content + '</a>';

        // troca content
        this.innerHTML = content;
    });

})();
