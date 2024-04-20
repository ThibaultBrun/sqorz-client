export class SqorzRequest {

    public static ORGANIZATION_ENDPOINT: string = "https://our.sqorz.com/json/region/";

    public static async getOrganizationsByCountry(countryCode: string) {
        const url = `${SqorzRequest.ORGANIZATION_ENDPOINT}${countryCode}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error while fetching data from ${url}`);
        }
        const organizations = await response.json();
        return organizations;
    }
}
