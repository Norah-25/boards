const products =[{id: 1, name: 'Product1'},
{id: 2, name: 'Product2'},
{id: 3, name: 'Product3'},
];

var express = require('express')
var router = express.Router()

 
// define the home page route
router.get('/', (req, res) => {
    res.send(products);
});

module.exports = router;
