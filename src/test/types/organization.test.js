const { Organization } = require('../../types/organization');

const organization = new Organization()
    .setId("anIdentifier")
    .setName("aName");

test('Organization constructor Id', () => {
    expect(organization.getId()).toBe("anIdentifier");
});

test('Organization constructor Name', () => {
    expect(organization.getName()).toBe("aName");
});