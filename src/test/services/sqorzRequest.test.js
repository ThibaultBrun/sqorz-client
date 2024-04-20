const { SqorzRequest } = require('../../services/sqorzRequest');

// Organizations
test('getOrganizationsByCountry OK', async () => {
    const organizations = await SqorzRequest.getOrganizationsByCountry("fr");
    expect(typeof organizations=='object').toBe(true);
});


test('getOrganizationsByCountry with bad country code', async () =>  {        
    await expect(SqorzRequest.getOrganizationsByCountry("not a country"))
    .rejects
    .toThrow('Error while fetching data from');
});

