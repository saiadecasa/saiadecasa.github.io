(function(w){

        var events = [
            {
                titulo : "Conferência Web.br 2015",
                dataInicio : "2015-09-22",
                dataFim : "2015-09-23",
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
                dataInicio : "2015-09-26",
                dataFim : "2015-09-26",
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
                dataInicio : "2015-09-26",
                dataFim : "2015-09-26",
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
                dataInicio : "2015-09-28",
                dataFim : "2015-09-28",
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
                dataInicio : "2015-10-03",
                dataFim : "2015-10-04",
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
                dataInicio : "2015-11-21",
                dataFim : "2015-11-21",
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

        var monthNames = [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        w.Events = {
                getAll : function(){
                    for(i=0;i<events.length;i++) {
                        events[i].data = Events.getTextData(events[i].dataInicio, events[i].dataFim);
                    }
                    return events;
                },

                getByTitulo : function (titulo) {
                    for(evento of events) {
                        if (evento.titulo !== titulo) continue;
                        evento.data = Events.getTextData(evento.dataInicio, evento.dataFim);
                        return evento;
                    }
                },

                getTextData : function(dataInicio, dataFim){
                    dataInicio = new Date(dataInicio);
                    day1 = dataInicio.getDate();
                    month1 = dataInicio.getMonth();
                    year1 = dataInicio.getFullYear();

                    dataFim = new Date(dataFim);
                    day2 = dataFim.getDate();
                    month2 = dataFim.getMonth();
                    year2 = dataFim.getFullYear();

                    if (year1 != year2) {
                        alert(day1 + ' de ' + monthNames[month1] + ' de ' + year1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2);
                        return day1 + ' de ' + monthNames[month1] + ' de ' + year1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (month1 != month2) {
                        alert(day1 + ' de ' + monthNames[month1] + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2);
                        return day1 + ' de ' + monthNames[month1] + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (day1 != day2) {
                        alert(day1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2);
                        return day1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    alert(day1 + ' de ' + monthNames[month2] + ' de ' + year2);
                    return day1 + ' de ' + monthNames[month2] + ' de ' + year2;
                }
        };
})(window);
