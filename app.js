const express = require( 'express' );
const app = express();


app.listen(3000, () => console.log("we're listening.."));

app.get('/', (req, res, next) => res.send("Hello!"));
