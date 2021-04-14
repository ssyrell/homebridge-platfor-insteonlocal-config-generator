import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Api, DeviceTypes } from '../insteonApi';
import { Token } from '../dataModels';
import { parse } from 'querystring';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const parsedBody = parse(req.body);
    const username = parsedBody.username as string;
    const password = parsedBody.password as string;

    const api = new Api();
    const token = await api.getAccessToken(username, password);

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(token)
    };

    return;

    
};

export default httpTrigger;