const { Organization } = require('../../src/types/organization');

const organization = new Organization()
    .setId("anIdentifier")
    .setCode("aCode")
    .setName("aName");

test('Organization constructor Id', () => {
    expect(organization.getId()).toBe("anIdentifier");
});

test('Organization constructor Name', () => {
    expect(organization.getName()).toBe("aName");
});

test('Organization constructor code', () => {
    expect(organization.getCode()).toBe("aCode");
});