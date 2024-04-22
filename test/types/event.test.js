const { Event } = require("../../src/types/event");

const event = new Event()
    .setId("anId")
    .setIdOrganization("idOrganization")
    .setIdClub("aClubId")
    .setName("aName")
    .setDateStart("21/04/1990")
    .setDateEnd("never");

test('Event Id', () => {
    expect(event.getId()).toBe("anId");
});

test('Event Name', () => {
    expect(event.getIdOrganization()).toBe("idOrganization");
});

test('Event idClub', () => {
    expect(event.getIdClub()).toBe("aClubId");
});

test('Event name', () => {
    expect(event.getName()).toBe("aName");
});

test('Event date start', () => {
    expect(event.getDateStart()).toBe("21/04/1990");
});

test('Event date end', () => {
    expect(event.getDateEnd()).toBe("never");
});
