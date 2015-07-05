(function(w){

        var events = [
            {
                titulo : "Front-End Carioca 2015",
                data : "26 de setembro",
                local : "Clube de Engenharia",
                endereco : "Av. Rio Branco, 124 - Centro, Rio de Janeiro - RJ",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.229129110692!2d-43.1780723!3d-22.904918100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e44176677%3A0x13531119e47c4cc9!2sAv.+Rio+Branco%2C+124+-+Centro%2C+Rio+de+Janeiro+-+RJ%2C+20040-001!5e0!3m2!1spt-BR!2sbr!4v1435802972051",
                localizacao : {
                    latitude: -22.9049181,
                    longitude: -43.1780723
                },
                link : "http://frontendcarioca.com.br/"
            },
            {
                titulo : "Mobile Summit",
                data : "26 de setembro",
                local : "Nós Coworking",
                endereco : "Av. Cristovao Colombo, 545 - Prédio 02 - 3º andar, Porto Alegre - RS",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.665708962401!2d-51.1960402!3d-30.0177538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979bacf9a52cb%3A0xaf13de93d92ca85f!2sCondom%C3%ADnio+do+Edif%C3%ADcio+Cinderela+-+Av.+Crist%C3%B3v%C3%A3o+Colombo%2C+2472+-+Floresta%2C+Porto+Alegre+-+RS%2C+90560-002!5e0!3m2!1spt-BR!2sbr!4v1435802499425",
                localizacao : {
                    latitude: -30.0177538,
                    longitude: -51.1960402
                },
                link : "http://www.facebook.com/events/760732324024794/"
            },
            {
                titulo : "Mobile Summit",
                data : "26 de setembro",
                local : "Espaço de Eventos Nós Coworking",
                endereco : "Av. Cristovão Colombo, 545, Bairro Floresta, Porto Alegre/RS",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3954512080195!2d-51.212343999999995!3d-30.0255108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a561211cef%3A0x523e58ce2e6fac7d!2sN%C3%B3s+Coworking!5e0!3m2!1spt-BR!2sbr!4v1436064787490",
                localizacao : {
                    latitude: -30.025513131441684,
                    longitude: -51.212344099999996
                },
                link : "http://www.msummit.com.br/"
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
                titulo : "Meetup RioJS",
                data : "18 de julho",
                local : "He:labs",
                endereco : "Rua da Glória, 190 - sala 1002 - Glória, Rio de Janeiro - RJ ",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117606.73266272437!2d-43.3924009!3d-22.905609299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7c53432603%3A0x14ef96e1337504eb!2sR.+da+Gl%C3%B3ria%2C+190+-+Gl%C3%B3ria%2C+Rio+de+Janeiro+-+RJ%2C+20241-180!5e0!3m2!1spt-BR!2sbr!4v1436069435890",
                localizacao : {
                    latitude: -22.905609299999995,
                    longitude: -43.3924009
                },
                link : "http://www.eventick.com.br/meetup-riojs-julho-2015"
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
