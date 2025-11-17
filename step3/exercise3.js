const express = require('express');
const app = express();

app.get('/user/:id', (req,res) => {
    const userId = req.params.id;
    res.end(`
            <h1> UserID: ${userId} </h1>   
        `);
})
app.listen(3000, () => {
    console.log('API server is running on localhost');
})