const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.end(`
        <h1>
            HomePage
        </h1>
        <p>
            This is the home page
        </p>
    `)
});

app.get('/about', (req,res) => {
    res.end(`
        <h1>
            About Page
        </h1>
        <p>
            Her is our information
        </p>
    `)
});

app.get('/contact', (req,res) => {
    res.end(`
        <h1>
            Contact
        </h1>
        <p>
            You can contact us
        </p>
    `)
});

app.listen(3000, () => {
    console.log('server running on localhost')
})