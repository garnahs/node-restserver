const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middleware
        this.middlewares();

        // Ruta de mi aplicacion
        this.routes();
    }

    middlewares() {
        // Direcctorio publico
        this.app.use( express.static('public') );

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;