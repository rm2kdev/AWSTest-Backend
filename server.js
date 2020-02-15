const express = require('express');
const uuidv1 = require('uuid/v1');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const MYID = uuidv1();
// App
const app = express();
app.get('/', (req, res) => {
    res.send(`Connected to server: ${MYID} Hey This is a test, but its the production branch`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} / I am ${MYID}`);
