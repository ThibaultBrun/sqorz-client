import { Organization } from "../types/organization";
import { SqorzRequest } from "./sqorzRequest";

export class SqorzController {

    public static async listOrganization(regionCode: string):Promise<Array<Organization>>{
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

    public static async listEventInProgress(regionCode:string){

    }
}

SqorzController.listOrganization("fr").then((organizations :Array<Organization>) => {
    console.log("nb of organization : ");
    console.log(organizations.length);
})
