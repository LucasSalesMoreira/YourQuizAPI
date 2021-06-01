const router = require('express').Router();
const path = require('path');

// OK
router.get('/', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadAllQuiz();
    if (data)   
        res.json({ ok: true, quizzes: data });
    else
        res.json({ ok: false });
});

// OK
router.get('/view/:title', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadQuiz(req.params.title);
    if (data)
        res.json({ ok: true, questions: data });
    else
        res.json({ ok: false });
});

// OK
router.post('/new_quiz/', async (req, res) => {    
    /*
    *   JSON Object esperado:
        {
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
    */

    const quiz  = req.body;
    //console.log("JSON recebido:");
    //console.log(quiz);
    console.log(path.resolve('src/controller/logic/CreateRegister.js'));
    const CreateRegister = require(path.resolve('src/controller/logic/CreateRegister.js'));
    const result = await new CreateRegister().createQuiz(quiz);
    
    if  (result)
        res.json({ ok: true });
    else
        res.json({ ok: false });
});

router.post('/response_quiz', async (req, res) => {
    /*
    *   JSON Object esperado:
        {
            "title": "xxxxxxx",
            "questions": [
                {
                    "id": 1,
                    "r": "b"
                },
                {
                    "id": 2,
                    "r": "a"
                },
                {
                    "id": 3,
                    "r": "c"
                }            
            ]
        }
    */
   
});

module.exports = router;