(function(w){

        var events = [
            {
                titulo : "Front in Manaus",
                dataInicio : "2015-10-17",
                dataFim : "2015-10-17",
                local : "Hotel Adrianópolis All Suítes",
                endereco : "Rua Salvador, 195 - Adrianópolis, Manaus",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.950208611021!2d-60.014567485242715!3d-3.1078746977368987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c054e625665f9%3A0x9be1788ba6a6aa33!2sR.+Salvador%2C+195+-+Adrian%C3%B3polis%2C+Manaus+-+AM%2C+69057-040!5e0!3m2!1spt-BR!2sbr!4v1444358152327",
                localizacao : {
                    latitude: -3.1078746977368987,
                    longitude: -60.014567485242715
                },
                link : "http://frontinmanaus.com.br/"
            },
            {
                titulo : "Hackday Hobbit Apprentice",
                dataInicio : "2015-10-11",
                dataFim : "2015-10-11",
                local : "Raul Hacker Club",
                endereco : "Rua da Paciência, 257 - Rio Vermelho, Salvador - BA",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3966577753295!2d-38.49421827909851!3d-13.01039374320602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160350941a2e5d%3A0x13f31ae484551bc4!2sRaul+Hacker+Club!5e0!3m2!1spt-BR!2sbr!4v1444079019714",
                localizacao : {
                    latitude: -13.0106237,
                    longitude: -38.4943685
                },
                link : "http://raulhc.cc/Agenda/2015-10-11-hackday-hobbit-apprentice"
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
            },
            {
                titulo : "PhpConference Brasil 2015",
                dataInicio : "2015-12-02",
                dataFim : "2015-12-06",
                local : "UNIFIEO",
                endereco : "Av. Franz Voegeli, 300 - Osasco, São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7789372193115!2d-46.76145219999998!3d-23.540452100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff447f41f72b%3A0xdfa4e0bd5729826e!2sUNIFIEO!5e0!3m2!1spt-BR!2sbr!4v1444267826591",
                localizacao : {
                    latitude: -23.540452,
                    longitude: -46.761452
                },
                link : "http://www.phpconference.com.br/"
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
