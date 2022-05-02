// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//Esto es un endpoint
//routes
// Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`Get Explorers V1 API ${new Date()}`);
    const explorer1 = { id: 1, name: "Explorer1" };
    const explorer2 = { id: 2, name: "Explorer2" };
    const explorers = [explorer1, explorer2];
    // HTTP CODE STATUS: 200 (succesful)
    res.status(200).json(explorers);
})

//Get regresa información
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Get by ID Explorers V1 API ${new Date()}`);
    const explorer1 = { id: 1, name: "Explorer1" };
    // HTTP CODE STATUS: 200 (succesful)
    res.status(200).json(explorer1);
})

//Post la crea
app.post('/v1/explorers', (req, res) => {
    console.log(`Post Explorers V1 API ${new Date()}`);
    //Agregar la lógica para persistir
    console.log(req.body) //parámetros del request
    res.status(201).json({ message: "Successfully created" }) //Se creó una nueva entidad
})

//Put la actualiza
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Put Explorers V1 API ${new Date()}`);
    console.log(req.body) //parámetros para actualizar
    console.log(req.params.id) //query params
    //Agregar la lógica para actualizar
    res.status(200).json({ message: "Successfully updated" })
})

//Delete la elimina
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Delete Explorers V1 API ${new Date()}`);
    //Agregar la lógica para eliminar el registro enviado
    res.status(200).json({ message: "Successfully deleted" })
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})