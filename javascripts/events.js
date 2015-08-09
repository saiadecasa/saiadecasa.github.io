(function(w){

        var events = [
            {
                titulo : "1º Nodeschool Campinas",
                data : "31 de julho",
                local : "Princi Web - Agência Digital",
                endereco : "Av. Júlio Diniz, 435 - Jardim Ns. Auxiliadora, Campinas",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.916823387267!2d-47.058397299999996!3d-22.879530799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6081d772e1d%3A0xa5cda7f0aea12787!2sAv.+J%C3%BAlio+Diniz%2C+435+-+Jardim+Nossa+Sra.+Auxiliadora%2C+Campinas+-+SP%2C+13075-420%2C+Brazil!5e0!3m2!1sen!2sus!4v1438013309499",
                localizacao : {
                    latitude: -22.879358,
                    longitude: -47.058381
                },
                link : "http://www.meetup.com/pt/Nodeschool-Campinas/events/223778257/"
            },
            {
                titulo : "Campinas Front-End Meetup",
                data : "01 de agosto",
                local : "CDI Campinas",
                endereco : "Av. Nestor Castanheira, 80, Vila Industrial, Campinas - SP",
                embed_link : "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14715.652343097261!2d-42.9173542!3d-22.76860655!3m2!1i1024!2i768!4f13.1!2m1!1sAv.+Di%C3%A1rio+de+Not%C3%ADcias%2C+300%2C+bairro+Cristal%2C+Porto+Alegre%2C+RS!5e0!3m2!1spt-BR!2sbr!4v1436140686717",
                localizacao : {
                    latitude: -22.912354,
                    longitude: -47.069400
                },
                link : "http://www.meetup.com/pt/Campinas-Front-End-Meetup/events/223794842/"
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
                titulo : "Android DevConference 2015",
                data : "29 de agosto",
                local : "Hotel Renaissance",
                endereco : "Av. Alameda Santos, 2233, São Paulo - SP",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2665262031114!2d-46.662335999999996!3d-23.5588693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2c9a0e4c3%3A0x32c2ff75b7acd122!2sAlameda+Santos%2C+2233+-+Jardim+Paulista%2C+S%C3%A3o+Paulo+-+SP%2C+01419-002!5e0!3m2!1spt-BR!2sbr!4v1437063872582",
                localizacao : {
                    latitude: -23.5588693,
                    longitude: -46.6623359
                },
                link : "http://androidconference.imasters.com.br/"
            },
            {
                titulo : "WordCamp Rio de Janeiro 2015",
                data : "29 de agosto",
                local : "Senac Flamengo",
                endereco : "Rua Marquês de Abrantes, 99 – Flamengo – Rio de Janeiro, RJ",
                embed_link : "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3674.371875920687!2d-43.1773033!3d-22.9365277!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x997f88f435624f%3A0x83ed42214af802dd!2sR.+Marqu%C3%AAs+de+Abrantes%2C+99+-+Flamengo%2C+Rio+de+Janeiro+-+RJ%2C+22230-061!3m2!1d-22.9365277!2d-43.1773033!5e0!3m2!1spt-BR!2sbr!4v1437756544681",
                localizacao : {
                    latitude: -22.9365277,
                    longitude: -43.1773033
                },
                link : "https://riodejaneiro.wordcamp.org/2015/"
            },
            {
                titulo : "JoomlaDay Brasil 2015",
                data : "4 a 6 de Setembro",
                local : "Universidade Católica de Brasília",
                endereco : "QS 07, Lote 01, EPCT, s/n - Águas Claras, Brasília - DF",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.7826667761815!2d-48.02944694442749!3d-15.86801596095458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d99eddf2aeb%3A0x1f93c6652deda3dc!2sUCB+-+Universidade+Cat%C3%B3lica+de+Bras%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1439132769648",
                localizacao : {
                    latitude: -15.8680159,
                    longitude: -48.0294469
                },
                link : "http://joomladaybrasil.org/2015/"
            },
            {
                titulo : "RubyConf Brasil",
                data : "18 e 19 de Setembro",
                local : "FECOMERCIO SP",
                endereco : "Rua Doutor Plínio Barreto, 285 - Bela Vista - São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.430140061132!2d-46.653856000000005!3d-23.560717999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x21c71fd197983309!2sFedera%C3%A7%C3%A3o+do+Com%C3%A9rcio+do+Estado+de+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sus!4v1438352225051",
                localizacao : {
                    latitude: -23.55797,
                    longitude: -46.652316
                },
                link : "http://www.rubyconf.com.br/pt-BR/home"
            },
            {
                titulo : "Conferência Web.br 2015",
                data : "22 e 23 de setembro",
                local : "Centro de Convenções Rebolsas",
                endereco : "Rua Doutor Enéas de Carvalho Aguiar, 23 - Cerqueira Cesar",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.304241239964!2d-46.66812059999998!3d-23.5575142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582b0020752d%3A0x3c6835cc0084f24c!2sAv.+Dr.+En%C3%A9as+de+Carvalho+Aguiar%2C+23+-+Cerqueira+C%C3%A9sar%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1sen!2sbr!4v1438211682234",
                localizacao : {
                    latitude: -23.557352,
                    longitude: -46.668105
                },
                link : "http://conferenciaweb.w3c.br/"
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
            },
            {
                titulo : "Front in Vale",
                data : "28 de Setembro",
                local : "Faro Hotel São José dos Campos",
                endereco : "Rua Síria, Jardim Oswaldo Cruz, São José dos Campos - São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7334.556781778243!2d-45.88264!3d-23.196523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a42f3190209%3A0x91ee04f155df318e!2sFaro+Hotel!5e0!3m2!1spt-BR!2sus!4v1438354820485",
                localizacao : {
                    latitude: -23.198722,
                    longitude: -45.883767
                },
                link : "http://frontinvale.com.br/"
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
