import {MongoClient} from 'mongodb';

const connectionUrl = 'mongodb://localhost:27017';

export default table => (callback) => MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
    if(err) throw err;
    callback(client);
});
