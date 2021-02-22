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
router.post('/new_quiz/:quizObject', async (req, res) => {
    const quiz  = req.body.quiz;
    console.log(quiz);
    res.json({  ok: true });
});

module.exports = router;