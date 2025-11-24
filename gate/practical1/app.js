import express from 'express';
import todos from './todos.js';

const app = express();
//Middleware to parse JSON bodies
app.use(express.json());

app.get('/todo', (req, res) => {
    res.status(200).json(todos);
});

//Middleware Validation
const ValidationStatus = (req, res, next) => {
    const allowedStutus = ["todo", "done", "pending"]; 
    const { status } = req.query || req.body.status;

    if(!allowedStutus.includes(status)){
            return res
                    .status(400)
                    .json({ message: "The status must be: todo, done, or pending"});
        }
    
        next();
}

//Create todo
app.post('/todo', (req, res) => {
    console.log(req.body);
    
        const newTodo = {
            id: todos.length +1,
            task: req.body.task,
            status: req.body.status
        }

        if(!newTodo.task || !newTodo.status) {
          return  res
                    .status(400)
                    .json({ message: 'Please provide both task and status'});
        }

        todos.push(newTodo);

        return res.status(201).json(todos);
})

// Filter by status
app.get('/todo', ValidationStatus, (req, res) => {
   const filterd = todos.filter((todo) => todo.status === req.query);
   if(filterd.length > 0) {
        res.status(200).json(filterd);
   }
   res.status(200).json(todos);
});

//Get todo by ID
app.get('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const todo = todos.find((todo) => todo.id === id);

    if(!todo){
        return res
                .status(400)
                .json({ message: `Todo for id: ${id} not found` });
    }

    res.status(200).json(todo)
})

app.listen(5000, () => {
    console.log('Server is runnig on PORT 5000');
})