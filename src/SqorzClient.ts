import { Organization } from "./types/organization";
import { Event } from "./types/event"
import { SqorzRequest } from "./services/sqorzRequest";
export class SqorzClient {

    public static async listOrganization(regionCode: string): Promise<Array<Organization>> {
        const organizations = new Array<Organization>();
        const datas = await SqorzRequest.getOrganizationsByRegion(regionCode)
        const accounts = datas.accounts;
        for (const account of accounts) {
            const organization = new Organization();
            organization
                .setId(account.accountId)
                .setCode(account.accountCode)
                .setName(account.accountName);
            organizations.push(organization);
        }
        return organizations
    }

    public static async listEventInProgress(regionCode: string): Promise<Array<Event>> {
        const events = new Array<Event>();
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
        const datas = await SqorzRequest.getEvents({
            regionCode: regionCode,
            startDate: today,
            endDate: today
        });
        return events;
    }
}
/*
SqorzClient.listEventInProgress("fr").then((events: Array<Event>) => {
    console.log(events);
    console.log("nb of events : ");
    console.log(events.length);
}).catch((error) => { console.error(error.message); });


SqorzClient.listOrganization("fromage").then((organizations: Array<Organization>) => {
    console.log("nb of organization : ");
    console.log(organizations.length);
}).catch((e)=>{console.log(e);console.log("oui");});
*/