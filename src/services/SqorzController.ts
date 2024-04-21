import { Organization } from "../types/organization";
import { SqorzRequest } from "./sqorzRequest";

export class SqorzController {

    public static listOrganization(regionCode: string):Array<Organization>{
        const organizations = new Array<Organization>();

        SqorzRequest.getOrganizationsByCountry(regionCode).then(datas=>{
            const accounts = datas.accounts;
            for(const account of accounts){
                const organization = new Organization();
                organization
                    .setId(account.accountId)
                    .setCode(account.accountCode)
                    .setName(account.accountName);
                organizations.push(organization);
            }
            console.log(organizations);
            return organizations;
        });
        return organizations;
    }
}

SqorzController.listOrganization("fr");
