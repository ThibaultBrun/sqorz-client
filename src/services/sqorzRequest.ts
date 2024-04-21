import { Url } from "url";

export class SqorzRequest {

    private static BASE_URL: string = "https://our.sqorz.com/json/";
    private static ORGANIZATION_ENDPOINT: string = `${SqorzRequest.BASE_URL}region/`;
    private static EVENTS_ENDPOINT: string = `${SqorzRequest.BASE_URL}events/`;
    private static EVENTS_BY_ORGANIZATION_ENDPOINT: string = `${SqorzRequest.BASE_URL}org/`;

    public static async getOrganizationsByCountry(countryCode: string) {
        return this.fetch(`${SqorzRequest.ORGANIZATION_ENDPOINT}${countryCode}`);
    }

    public static async getEvents(params: object = {}) {
        return this.fetch(SqorzRequest.EVENTS_ENDPOINT, params);
    }

    public static async getEventsByOrganization(organization: string) {
        return this.fetch(`${SqorzRequest.EVENTS_BY_ORGANIZATION_ENDPOINT}${organization}`);
    }

    private static async fetch(endpoint: string | URL, params: object = {}) {
        const url = new URL(endpoint);

        const keys = Object.keys(params) as Array<keyof typeof params>;
        keys.forEach((key) => {
            url.searchParams.append(key as string, params[key]);
        });

        const response = await fetch(url.href);
        if (!response.ok) {
            throw new Error(`Error while fetching data from ${url.href}`);
        }
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Error while decoding data from ${url.href}`);
        }
    }
}
