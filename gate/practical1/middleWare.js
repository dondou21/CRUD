import express from 'express';
import requestLogger from './middleware/requestLogger.js'

const app = express();
const users = [
    {
        id: 1,
        name: 'Kyra'
    },
    {
        id: 2,
        name: 'Joly'
    },
    {
        id: 3,
        name: 'Bobo'
    },
]

app.use(express.json());

app.use(requestLogger);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to Homepage'});
})

app.get('/users', (req, res) => {
    res.status(200).json(users)              
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})