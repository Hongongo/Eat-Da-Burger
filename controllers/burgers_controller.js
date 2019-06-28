var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    console.log('****** GET Request / ******');
    burger.selectAll(function (data) {
        var hsbObject = {
            burgers: data
        };
        console.log(hsbObject);
        res.render('index', hsbObject);
    });
}); // router.get('/')

router.post('/api/burgers', function(req, res){
    console.log('******* POST Request /api/burgers *******');
    if (req.body.burger_name !== ""){
        burger.insertOne(req.body.burger_name, function (result) {
            res.json({
                id: result.id
            }); // res.json
        }); // burger.insertOne
    }
}); // router.post('/api/burgers')

router.put("/:id", function(req, res) {
    console.log('******* PUT REQUEST: /' + req.params.id + '******');
    burger.updateOne(req.params.id, function() {
        res.status(200).end();
    });
}); // router.put('/:id')

module.exports = router;