(function(w){

        var events = [
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
            },
            {
                titulo : "1º Encontro PHPESTE",
                data : "3 e 4 de Outubro",
                local : "Instituto Federal da Paraíba",
                endereco : "Av. Primeiro de Maio, 795 - Jaguaribe, João Pessoa, Paraíba",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9257522572016!2d-34.873064899999996!3d-7.1345847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81a70c800dd%3A0x9b9b3adc146a7d82!2sAv.+Primeiro+de+Maio%2C+795+-+Jaguaribe%2C+Jo%C3%A3o+Pessoa+-+PB!5e0!3m2!1spt-BR!2sbr!4v1439134819504",
                localizacao : {
                    latitude: -7.1345847,
                    longitude: -34.8730648
                },
                link : "http://phpeste.net/"
            },
            {
                titulo : "Frontinsampa 2015",
                data : "21 de novembro",
                local : "Inferno Club",
                endereco : "Rua Augusta, 501 - Jardim Paulista, São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4713389613744!2d-46.650642999999995!3d-23.5515095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584a87db01ed%3A0x8984cc59b6df5141!2sR.+Augusta%2C+501+-+Consola%C3%A7%C3%A3o%2C+S%C3%A3o+Paulo+-+SP%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1440439501467",
                localizacao : {
                    latitude: -23.551219,
                    longitude: -46.650659
                },
                link : "http://www.frontinsampa.com.br/"
            }
        ];

        w.Events = {
                getAll : function(){
                    return events;
                },

                getByTitulo : function (titulo) {
                    for(evento of events) {
                        if (evento.titulo !== titulo) continue;
                        return evento;
                    }
                }
        };
})(window);
