const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadAllQuiz();
    if (data)   
        res.json({ quizzes: data });
    else
        res.json({ ok: false });
});

router.get('/view/:title', async (req, res) => {
    const Loader = require(path.resolve('src/controller/logic/Loader.js'));
    const data = await new Loader().loadQuiz(req.params.title);
    if (data)
        res.json({ questions: data });
    else
        res.json({ ok: false });
});

router.get('/new_quiz/:quizObject', async (req, res) => {
    res.json(req.params.quizObject);
});

module.exports = router;