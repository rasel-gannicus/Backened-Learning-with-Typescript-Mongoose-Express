
import { Server } from 'http';
import app from './app';

const PORT = 2000;

let server: Server;

async function bootstrapped() {
    server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}

bootstrapped() ; 