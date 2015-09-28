(function(w){

        var events = [
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
          "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
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
                    day1 = dataInicio.getUTCDate();
                    month1 = dataInicio.getUTCMonth();
                    year1 = dataInicio.getUTCFullYear();

                    dataFim = new Date(dataFim);
                    day2 = dataFim.getUTCDate();
                    month2 = dataFim.getUTCMonth();
                    year2 = dataFim.getUTCFullYear();

                    if (year1 != year2) {
                        return day1 + ' de ' + monthNames[month1] + ' de ' + year1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (month1 != month2) {
                        return day1 + ' de ' + monthNames[month1] + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (day1 != day2) {
                        return day1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    return day1 + ' de ' + monthNames[month2] + ' de ' + year2;
                }
        };
})(window);
