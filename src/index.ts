import { App } from './app';
const envFiles = require('dotenv').config();

import './config/database';


async function main() {
    const app = new App(3999);
    await app.start();
    envFiles;
}

main();