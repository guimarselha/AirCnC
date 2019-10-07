const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const socketIo = require('socket.io')
const http = require('http')

const app = express();
const server = http.Server(app)
const io = socketIo(server)

io.on('connection', socket => {
    
})

mongoose.connect('mongodb+srv://oministack:oministack@oministack-he4sl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//req.query acessa query params
//req.params edição e delete
//req.body acessar corpo criação edição

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);
server.listen(3333);
