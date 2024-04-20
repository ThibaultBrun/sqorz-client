export class SqorzRequest {

    private static ORGANIZATION_ENDPOINT: string = "https://our.sqorz.com/json/region/";
    private static EVENTS_ENDPOINT: string = "https://our.sqorz.com/json/events/";
    private static EVENTS_BY_ORGANIZATION_ENDPOINT: string = "https://our.sqorz.com/json/org/";

    public static async getOrganizationsByCountry(countryCode: string) {
        const url = `${SqorzRequest.ORGANIZATION_ENDPOINT}${countryCode}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error while fetching data from ${url}`);
        }
        const organizations = await response.json();
        return organizations;
    }

    public static async getEvents(regionCode: string | null, dateStart: string | null, dateEnd: string | null) {
        const eventUrl = new URL(SqorzRequest.EVENTS_ENDPOINT);
        if (regionCode) eventUrl.searchParams.append("regionCode", regionCode);
        if (dateStart) eventUrl.searchParams.append("startDate", dateStart);
        if (dateEnd) eventUrl.searchParams.append("endDate", dateEnd);

        const response = await fetch(eventUrl.href);
        if (!response.ok) {
            throw new Error(`Error while fetching data from ${eventUrl.href}`);
        }
        const events = await response.json();
        return events;
    }

    public static async getEventsByOrganization(organization: string) {
        const url = `${SqorzRequest.EVENTS_BY_ORGANIZATION_ENDPOINT}${organization}`;
        console.log(url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error while fetching data from ${url}`);
        }
        const events = await response.json();
        return events;
    }
}
