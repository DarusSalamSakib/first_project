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
            return '<h1 style="color:blue">Hello World</h1>';
        }
    });

    server.route({
        method: `GET`,
        path: `/sakib`,
        handler: (request, h) => {
            return '<h1 style="color:blue">Hello baby</h1>';
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