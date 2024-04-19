const {Organization} = require('../../classes/organization');

const organization = new Organization("anIdentifier", "aName");

test('Organization constructor Id', () => {
    expect(organization.getId()).toBe("anIdentifier");
});

test('Organization constructor Name', () => {
    expect(organization.getName()).toBe("aName");
});