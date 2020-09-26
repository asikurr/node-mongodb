const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello This is from node js.')
});

app.listen(3100, () => console.log('Server open in 3100.'))