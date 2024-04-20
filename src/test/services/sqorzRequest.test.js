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


// Events
test('getEvents OK', async () => {
    const events = await SqorzRequest.getEvents("fr","2024-04-17","2024-04-24");
    expect(typeof events=='object').toBe(true);
});


test('getEvents with bad region code', async () =>  {        
    await expect(SqorzRequest.getEvents("fromage","2024-04-17","2024-04-24"))
    .rejects
    .toThrow('Error while fetching data from');
});

test('getEventsByOrganization OK', async () => {
    const events = await SqorzRequest.getEventsByOrganization("ffcnoaq");
    expect(typeof events=='object').toBe(true);
});


test('getEventsByOrganization with bad region code', async () =>  {        
    await expect(SqorzRequest.getEventsByOrganization("fromage"))
    .rejects
    .toThrow('Error while fetching data from');
});
