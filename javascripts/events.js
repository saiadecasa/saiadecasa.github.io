(function(w){

        var events = [
            {
                titulo : "Front-End Carioca 2015",
                data : "26 de setembro",
                local : "Clube de Engenharia",
                endereco : "Av. Rio Branco, 124 - Centro, Rio de Janeiro - RJ",
                embed_link : "https://www.google.com.br/maps/place/Clube+de+Engenharia/@-22.9025174,-43.1777431,16z/data=!4m5!1m2!2m1!1sAv.+Rio+Branco,+124+-+Centro,+Rio+de+Janeiro+-+RJ+CEP:+20040-001!3m1!1s0x997f5e44942bed:0xe6f52d490fb5bcf0",
                localizacao : {
                    latitude: -22.9025174,
                    longitude: -43.1777431
                },
                link : "http://frontendcarioca.com.br/"
            },
            {
                titulo : "Mobile Summit",
                data : "26 de setembro",
                local : "Nós Coworking",
                endereco : "Av. Cristovao Colombo, 545 - Prédio 02 - 3º andar, Porto Alegre - RS",
                embed_link : "https://www.google.com.br/maps/place/N%C3%B3s+Coworking/@-30.0255108,-51.212344,17z/data=!3m1!4b1!4m2!3m1!1s0x951979a561211cef:0x523e58ce2e6fac7d",
                localizacao : {
                    latitude: -30.0255108,
                    longitude: -51.212344
                },
                link : "http://www.facebook.com/events/760732324024794/"
            },
            {
                titulo : "BrazilJS Conf 2015",
                data : "21 e 22 de agosto",
                local : "Shopping Center BarraShoppingSul",
                endereco : "Av. Diário de Notícias, 300, bairro Cristal, Porto Alegre, RS",
                embed_link : "https://www.google.com/maps/place/30%C2%B004'58.3%22S+51%C2%B014'49.2%22W/@-30.082806,-51.2469509,17z/data=!4m2!3m1!1s0x0:0x0?hl=pt-BR",
                localizacao : {
                    latitude: -30.0828617,
                    longitude: -51.246993799999984
                },
                link : "http://braziljs.com.br/"
            },        
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
