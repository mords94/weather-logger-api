import mongo from '../db';

export default class Log {
 
    all(callback) {
        mongo(client => {
            const db = client.db("weather")
            db.collection(Log.collection).find().toArray(callback);
        });
       
    }

    add(log) {
       // mongo(db => db.collection(Log.collection).insertOne(log));
    }
}

Log.collection = "logs";