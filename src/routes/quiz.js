const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    const Load = require(path.resolve('src/controller/logic/Load.js'));
    const data = await new Load().loadAllQuiz();
    if (data)   
        res.json({ quizzes: data });
    else
        res.json({ ok: false });
});

router.get('/view/:title', async (req, res) => {
    const Load = require(path.resolve('src/controller/logic/Load.js'));
    const data = await new Load().loadQuiz(req.params.title);
    if (data)
        res.json({ questions: data });
    else
        res.json({ ok: false });
});

router.get('/new_quiz/:quizObject', async (req, res) => {
    res.json(req.params.quizObject);
});

module.exports = router;