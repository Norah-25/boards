
const boards =[{id: 1, name: 'board1'},
{id: 2, name: 'board2'},
{id: 3, name: 'board3'},
];

var express = require('express')
var router = express.Router()

 
// define the home page route
router.get('/', (req, res) => {
    res.send(boards);
});

module.exports = router;



