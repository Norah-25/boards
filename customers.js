const customers =[
{id: 1, name: 'Sara'},
{id: 1, name: 'Sara'},
{id: 1, name: 'Sara'},
];
 
var express = require('express')
var router = express.Router()

 
// define the home page route
router.get('/', (req, res) => {
    res.send(customers);
});


module.exports = router

