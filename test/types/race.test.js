const { Race } = require('../../src/types/race');

const race = new Race()
    .setId("anIdentifier")
    .setIdEvent("theEventId")
    .setName("aName")
    .setRound(Race.ROUND.FINAL);

test('Race  Id', () => {
    expect(race.getId()).toBe("anIdentifier");
});

test('Race event', () => {
    expect(race.getIdEvent()).toBe("theEventId");
});

test('Race name', () => {
    expect(race.getName()).toBe("aName");
});

test('Race round', () => {
    expect(race.getRound()).toBe(Race.ROUND.FINAL);
});
