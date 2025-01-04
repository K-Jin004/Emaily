const express = require('express');
const app = express();
// import express from 'express' new version


// app: express app to register this route handler with
// get: watch for incoming requests withi this method
// '/': watch for request trying to access '/'
// req: object representing the incoming request
// res: object representing the outgoing response
// res.send({}): immediately send some JSON back to who ever made this request
//接受localhost:8432/ 请求时，发送hi there
app.get('/', (req, res) => {
    res.send({hi: 'there, changed the file, bye!'});
});

const PORT = process.env.PORT || 8432;
app.listen(PORT); // express tells Node to listen on port 8432

