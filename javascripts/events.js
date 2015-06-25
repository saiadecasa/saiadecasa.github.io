(function(w){

        var events = [
            {
                titulo : "DrupalCamp São Paulo 2015",
                data : "26 e 27 de junho",
                local : "Impacta Tecnologia",
                endereco : "Avenida Rudge, 315 - Bom Retiro, São Paulo - SP, 01133-000",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.195126999969!2d-46.6495323!3d-23.525483299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce586d6fa31fab%3A0x31356ea05c4cb1b!2sAv.+Rudge%2C+315+-+Bom+Retiro%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1sen!2sbr!4v1435189959302",
                localizacao : {
                    latitude: -23.525551,
                    longitude: -46.649487
                },
                link : "http://saopaulo.drupalcamp.com.br/2015/"
            },
            {
                titulo : "The Developers Conference - São Paulo",
                data : "21 a 25 de julho",
                local : "Universidade Anhembi Morumbi",
                endereco : "Rua Casa do Ator, 275 - Vila Olímpia - São Paulo - SP",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1174053028217!2d-46.677008!3d-23.600122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57536602d7f7%3A0xe8034f1be9c3a8b8!2sUniversidade+Anhembi+Morumbi!5e0!3m2!1spt-BR!2sbr!4v1431381035864",
                localizacao : {
                    latitude: -23.600122,
                    longitude: -46.677008
                },
                link : "http://www.thedevelopersconference.com.br/"
            },
            {
                titulo : "Front in BH 2014",
                data : "26 de julho",
                local : "Teatro Ney Soares",
                endereco : "R. Diamantina, 488 - Lagoinha, MG, 31110-320",
                embed_link : "https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d3751.390672182783!2d-43.94352446951748!3d-19.90793534328476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!1i0!3e6!4m0!4m3!3m2!1d-19.907978999999997!2d-43.941421999999996!5e0!3m2!1sen!2s!4v1402416646316",
                localizacao : {
                    latitude: -19.9077883,
                    longitude: -43.9414493
                },
                link : "http://frontinbh.com.br/"
            }
        ];

        w.Events = {
                getAll : function(){
                    return events; 
                },

                getByTitulo : function (titulo) {
                    var eventos = this.getAll();
                    for(var index in eventos) {
                        var evento = events[index];
                        if (evento.titulo === titulo) {
                            return evento;
                        }
                    }
                }
        };
})(window);