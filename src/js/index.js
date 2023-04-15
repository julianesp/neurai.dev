const express = require('express')

const app = express

const port = 3000

app.get('/', (req, res) => {
    res.send('Server from Express')
})

app.listen(port, () => {
    console.log('Escuchando desde el puerto', port)
})