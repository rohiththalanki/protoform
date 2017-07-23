var express = require('express');
var router = express.Router();

var Mongoclient = require("mongodb").MongoClient;
var url="mongodb://localhost:27017/thalanki";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){



        Mongoclient.connect(url,function(err,db){

            data=  'str'
                db.collection("details").insert(req.body).then((data)=> {

                console.log(data)

                })
            var tf  = db.collection("details").find().toArray();
            tf.then((daa) => {

           data= daa
           res.send(data);
            })
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");
            console.log("sdfasdfasdf");




        })



});
module.exports = router;

