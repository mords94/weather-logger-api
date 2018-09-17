import Controller from './Controller';
import bind from 'bind-decorator';
import {MongoClient} from 'mongodb';

export default class LogController extends Controller {
    @bind
    create(req, res) {
        MongoClient.connect('mongodb://localhost:27017/weather', function (err, client) {
            if (err) throw err
        
            const db = client.db('weather')
            
            db.collection('logs').insert(req.body,function (err, r) {
                if (err) throw err
                res.json({inserted: r})
            });
        })
    }

    @bind
    index(req, res) {
        MongoClient.connect('mongodb://localhost:27017/weather', function (err, client) {
            if (err) throw err
        
            const db = client.db('weather')
            
            db.collection('logs').find().toArray(function (err, result) {
                if (err) throw err
            
                res.json(result)
            })
        })
       
    };
}