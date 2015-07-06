(function(w){

        var events = [
            {
                titulo : "Meetup RioJS",
                data : "18 de julho",
                local : "He:labs",
                endereco : "Rua da Glória, 190 - sala 1002 - Glória, Rio de Janeiro - RJ ",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.854622520986!2d-43.1776643!3d-22.9187324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7c53432603%3A0x14ef96e1337504eb!2sR.+da+Gl%C3%B3ria%2C+190+-+Gl%C3%B3ria%2C+Rio+de+Janeiro+-+RJ%2C+20241-180%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1436134224050",
                localizacao : {
                    latitude: -22.9187324,
                    longitude: -43.1776643
                },
                link : "http://www.eventick.com.br/meetup-riojs-julho-2015"
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
                titulo : "BrazilJS Conf 2015",
                data : "21 e 22 de agosto",
                local : "Shopping Center BarraShoppingSul",
                endereco : "Av. Diário de Notícias, 300, bairro Cristal, Porto Alegre, RS",
                embed_link : "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14715.652343097261!2d-42.9173542!3d-22.76860655!3m2!1i1024!2i768!4f13.1!2m1!1sAv.+Di%C3%A1rio+de+Not%C3%ADcias%2C+300%2C+bairro+Cristal%2C+Porto+Alegre%2C+RS!5e0!3m2!1spt-BR!2sbr!4v1436140686717",
                localizacao : {
                    latitude: -22.76860655,
                    longitude: -42.9173542
                },
                link : "http://braziljs.com.br/"
            },
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
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3954512080186!2d-51.212344!3d-30.025510800000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x523e58ce2e6fac7d!2sN%C3%B3s+Coworking!5e0!3m2!1spt-BR!2sbr!4v1436214361314",
                localizacao : {
                    latitude: -30.0255108,
                    longitude: -51.212344
                },
                link : "http://www.msummit.com.br/"
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
