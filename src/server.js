const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user'); 

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/quiz', quizRoutes);
app.use('/user', userRoutes);

const port = process.env.port || 3000;

app.listen(port, (error) => {
    if (error)
        console.log(error);
    else
        console.log('Server on!');
});