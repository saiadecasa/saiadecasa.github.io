(function(w){

        var events = [
            {
                titulo : "17º Encontro Locaweb de Profissionais de Internet - São Paulo",
                data : "18 de junho",
                local : "Fecomercio-SP",
                endereco : "Rua Doutor Plínio Barreto, 285 - Bela Vista, São Paulo - SP, 01313-020",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.5998102613485!2d-46.652248!3d-23.55767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21c71fd197983309!2sFedera%C3%A7%C3%A3o+do+Com%C3%A9rcio+do+Estado+de+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sbr!4v1424887846908",
                localizacao : {
                    latitude: -23.55767,
                    longitude: -46.652248
                },
                link : "http://eventos.locaweb.com.br/17o-encontro-locaweb-de-profissionais-de-internet-de-sao-paulo/"
            },
            {
                titulo : "RuPy Campinas",
                data : "20 de junho",
                local : "Faculdade de Engenharia Elétrica e de Computação (FEEC) - Unicamp",
                endereco : "Avenida Albert Einstein, 400 - Cidade Universitária - Campinas",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7355.074395894319!2d-47.064721568999175!3d-22.819606489990303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6add6b9f5d3%3A0x82e3f5267d13e82c!2sAv.+Albert+Einstein%2C+400+-+Cidade+Universit%C3%A1ria%2C+Faculdade+de+Engenharia+El%C3%A9trica+e+Computa%C3%A7%C3%A3o+(FEEC)%2C+Universidade+Estadual+de+Campinas+-+Campinas+-+SP%2C+13083-852!5e0!3m2!1sen!2sbr!4v1424211246725",
                localizacao : {
                    latitude: -22.819606489990303,
                    longitude: -47.064721568999175
                },
                link : "http://campinas.rupy.com.br/"
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