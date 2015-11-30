var events = require('../data/events.json');
var should = require('should');

describe('Events', function() {
    it('should have `events` property as an array', function() {
        events.should.have.property('events').which.is.a.Array();
    });
    it('`events` should be not empty', function() {
        events.should.have.property('events').which.be.not.empty();
    });

    events.events.forEach(validateRequiredParameters);
});

function validateRequiredParameters(event, i, arr) {
    it('each event should have title - dataset #' + i, function () {
        event.should.have.property('titulo').which.is.a.String();
    });

    it('each event should have init date - dataset #' + i, function () {
        event.should.have.property('dataInicio').which.is.a.String();
    });

    it('each event should have end date - dataset #' + i, function () {
        event.should.have.property('dataFim').which.is.a.String();
    });

    it('each event should have local - dataset #' + i, function () {
        event.should.have.property('local').which.is.a.String();
    });

    it('each event should have address - dataset #' + i, function () {
        event.should.have.property('endereco').which.is.a.String();
    });

    it('each event should have location coordinates - dataset #' + i, function () {
        event.should.
            have.property('localizacao').which.is.a.Object().
            with.properties(['latitude', 'longitude']);
    });

    it('each event should have a more information link - dataset #' + i, function () {
        event.should.
            have.property('link').which.is.a.String().and.
            startWith('http');
    });


}

