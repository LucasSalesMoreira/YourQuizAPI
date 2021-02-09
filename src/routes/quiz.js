const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({connected: true});
});

router.get('/view/:title', (req, res) => {
    res.json({title: req.params.title});
});

router.get('/new_quiz/:quizObject', (req, res) => {
    res.json(req.params.quizObject);
});

module.exports = router;