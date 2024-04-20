const { Pilot } = require('../../types/pilot');

const pilot = new Pilot()
    .setId("anIdentifier")
    .setIdClub("anIdClub")
    .setGender(Pilot.Gender.BOY)
    .setName("aName")
    .setFirstName("Charly")
    .setNumber("68b")
    .setBirthDate("2017");

test('Pilot constructor Id', () => {
    expect(pilot.getId()).toBe("anIdentifier");
});

test('Pilot constructor club', () => {
    expect(pilot.getIdClub()).toBe("anIdClub");
});

test('Pilot constructor genre', () => {
    expect(pilot.getGender()).toBe(Pilot.Gender.BOY);
});

test('Pilot constructor name', () => {
    expect(pilot.getName()).toBe("aName");
});

test('Pilot constructor firstname', () => {
    expect(pilot.getFirstName()).toBe("Charly");
});

test('Pilot constructor number', () => {
    expect(pilot.getNumber()).toBe("68b");
});

test('Pilot constructor birth date', () => {
    expect(pilot.getBirthDate()).toBe("2017");
});