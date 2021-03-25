import minimist from 'minimist';
import chalk from 'chalk';
import dotenv from 'dotenv';

import { Api } from './api';

export async function cli(args) {
    const argsObj = minimist(args.slice(2));
    console.log(argsObj);
    if (argsObj._.length !== 2 || argsObj._[0] === 'help') {
        printUsage();
    } else {
        const username = argsObj._[0];
        const password = argsObj._[1];

        var output = dotenv.config();

        const api = new Api();
        await api.getAccessToken(username, password);

        const houses = await api.getHouses();
        console.log(houses);
        console.log(houses[0].HouseID);
        const firstHouse = await api.getHouse(houses[0].HouseID);
        console.log(firstHouse);
    }
}

async function printUsage()
{
    const usage = chalk.greenBright('insteon-discovery <username> <password>');
    console.log(usage);
}