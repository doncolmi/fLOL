const mongo = require('mongoose');

// connect mongoDB
module.exports = () => {
    function connect() {
        // edit your .env file when use MONGODB
        const config = {
            id : process.env.ID || 'flol',
            password : process.env.PASSWORD || '1234',
            port : process.env.DBPORT || '27017',
            db : process.env.DB || 'localhost',
            dbname : process.env.NAME || 'flol'
        }

        // No need to modify the content below
        const dbConfig = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const info = `mongodb://${config.id}:${config.password}@${config.db}:${config.port}/${config.dbname}`;
        
        mongo.connect(info, dbConfig , function(err) {
            if (err) {
                console.log('MONGO FAIL : mongodb connection error ...', err);
                return;
            }
            console.log('MONGO SUCCESS : mongodb connected');
        });
    }

    connect();
    mongo.connection.on('disconnected', connect);
}