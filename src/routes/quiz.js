const router = require('express').Router();

router.get('/', async (req, res) => {
    
    res.json({ connected: true });
});

router.get('/view/:title', async (req, res) => {
    const path = require('path');
    const Load = require(path.resolve('src/controller/logic/load.js'));
    const load = new Load();
    const data = await load.loadQuiz(req.params.title);
    if (data)
        res.json({ questions: data });
    else
        res.json({ ok: false });
});

router.get('/new_quiz/:quizObject', async (req, res) => {
    res.json(req.params.quizObject);
});

module.exports = router;