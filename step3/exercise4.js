const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/data', (req,res) => {

    res.send({ message: "Here is your data", data: [1,2,3]});
});

app.post('/api/data', (req,res) => {
    const newData = req.body;
    res.send({ message: 'Data received', data: newData});
});

app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    res.send({
        message: `Data with ID ${id} has been updated`,
        updated: updatedData
    })
})

// app.delete('/api/data/:id', (req,res) => {
//     const id = req.params.id;
//     res.send({
//         message: `This is the deleted data's ID ${id}`
//     });
// })

app.listen(3000, () => {
    console.log('Server is running....');
});