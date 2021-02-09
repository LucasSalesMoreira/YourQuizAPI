const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({connected: true});
});

router.get('/new_user/:nick', (req, res) => {
    res.json({nick: req.params.nick});
});

module.exports = router;