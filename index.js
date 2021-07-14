const app = require('express')();
const PORT = 8080;
const routes = require('./routes')
app.use('/',routes)
app.listen(
    PORT,
    () => console.log(`it's alive on http:${PORT}`)

)

