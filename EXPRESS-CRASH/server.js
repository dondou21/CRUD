import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/looger.js';
import errorHandler from './error.js';

const port = process.env.PORT || 8000;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use('/api/posts', posts);

//Logger 
app.use(logger);

//Error handler
app.use(errorHandler);

app.listen(8000, () => {
    console.log('Server is running on port: ' + port);
})