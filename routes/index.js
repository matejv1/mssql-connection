var express = require('express');
var router = express.Router();
var sql = require("mssql");

var config = require('../config');

router.get('/', function(req,res,next){
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/get', function(req, res, next) {

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from LOG', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

/* GET home page. */
router.get('/insert', function(req, res, next) {

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("insert into LOG (TITLE,DESCRIPTION) values('QWEI','GHEURI')", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response 
            res.send(recordset);
        });
    });
});

module.exports = router;
