const { Club } = require('../../classes/club');

const club = new Club()
    .setId("anIdentifier")
    .setIdOrganization("anOrganizationId")
    .setName("aName");

test('Club constructor Id', () => {
    expect(club.getId()).toBe("anIdentifier");
});
test('Club constructor Name', () => {
    expect(club.getIdOrganization()).toBe("anOrganizationId");
});
test('Club constructor Name', () => {
    expect(club.getName()).toBe("aName");
});