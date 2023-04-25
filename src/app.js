const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.sendFile(__dirname, './pages/index.js')
})

// la app must listen in the port declarado
app.listen(port, () => {
    console.log('Ejecutando from port: ' + port)
})