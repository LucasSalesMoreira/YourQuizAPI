const router = require('express').Router();
const path = require('path');

// OK
router.get('/', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadAllQuiz();
    if (data)   
        res.json({ quizzes: data });
    else
        res.json({ ok: false });
});

// OK
router.get('/view/:title', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadQuiz(req.params.title);
    if (data)
        res.json({ questions: data });
    else
        res.json({ ok: false });
});

// PENDENTE
router.post('/new_quiz/', async (req, res) => {
    const quiz  = req.body.quiz;
    console.log("JSON recebido:");
    console.log(quiz);
    
/*
*  JSON Object esperado:
{
    "quiz": {
        "author": "xxxxxx",
        "title": "xxxxxxx",
        "questions": [
            {
                "ask": "xxxxx xxx xxxx?",
                "a": "xxxxxxxxxxxxx",
                "b": "xxxxxxxxxxxxx",
                "c": "xxxxxxxxxxxxx",
                "right": "b"
            },
            {
                "ask": "xxxxx xxx xxxx?",
                "a": "xxxxxxxxxxxxx",
                "b": "xxxxxxxxxxxxx",
                "c": "xxxxxxxxxxxxx",
                "right": "a"
            },
            {
                "ask": "xxxxx xxx xxxx?",
                "a": "xxxxxxxxxxxxx",
                "b": "xxxxxxxxxxxxx",
                "c": "xxxxxxxxxxxxx",
                "right": "c"
            }
        ]
    }
} 
*/

    const CreateRegister = require(path.resolve('src/controller/logic/CreateRegister.js'));
    const result = await new CreateRegister().createQuiz(quiz);
    
    if  (result)
        res.json({ ok: true });
    else
        res.json({ ok: false });
});

module.exports = router;