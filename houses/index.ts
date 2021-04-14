import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Api } from '../insteonApi';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const authToken = (req.headers['Authorization'] || req.headers['authorization']).split(' ')[1]; 
    
    if (!authToken) {
        context.res = {
            status: 401,
            body: "Invalid/missing authorization token"
        };
        return;
    }
    
    const api = new Api(authToken);
    let response;
    if (req.params.houseId) {
        response = await api.getHouse(req.params.houseId);
    } else {
        response = await api.getHouses();
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

export default httpTrigger;