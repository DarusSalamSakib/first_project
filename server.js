'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: 5000
        
    });

    server.route({
        method: `GET`,
        path: `/`,
        handler: (request, h) => {
            return "<h1>Hello World!</h1><br><h2>Ki obosthaa borobhai</h2>";
        }
    });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
})

init();