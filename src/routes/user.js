const router = require('express').Router();
const path = require('path');

// OK
router.get('/', async (req, res) => {
    res.json({connected: true});
});

// OK
router.post('/new_user/', async (req, res) => {
    const CreateRegister = require(path.resolve('src/controller/logic/CreateRegister.js'));
    const result = await new CreateRegister().createNick(req.body.nick);
    if  (result)
        res.json({ ok: true });
    else
        res.json({ ok: false });
});

module.exports = router;