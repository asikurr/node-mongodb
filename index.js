const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

const fruit = [
    {name: 'Mango',
    quantity:500,
    price:'30k'},
    {name: 'Apple',
    quantity:300,
    price:'30k'}
]
const user = ['Asikur', 'Rahaman', 'Rahim', 'Salam', 'Rofiq']

app.get('/', (req, res) => {
    res.send('Hello World.')
});

app.get('/fruits/:id', (req, res) => {
       const id = req.params.id;
       const name = fruit[id]
        res.send(name)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id]
    res.send({name, id})
})

app.post('/addUsers', (req, res) => { 
    // console.log('Data Received.', req.body)
    const user = req.body
    user.id = 10
    res.send(user)
    // console.log(user)
})

app.listen(3000, () => console.log('Server open in 3000.'))