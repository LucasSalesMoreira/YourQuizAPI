const express = require('express');
const app = express();
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user'); 

app.use('/quiz', quizRoutes);
app.use('/user', userRoutes);

const port = process.env.port || 3000;

app.listen(port, (error) => {
    if (error)
        console.log(error);
    else
        console.log('Server on!');
});