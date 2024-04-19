const { Pilot } = require('../../classes/pilot');

// TODO use builder pattern .. 
const pilot = new Pilot("anIdentifier", "anIdClub", Pilot.Gender.BOY, "aName", "Charly", "68b", "2017");

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