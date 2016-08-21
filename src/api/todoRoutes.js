var express = require('express');
var router = express.Router();

router.get('/todos', function (req, res) {
 todos = [{
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    }];
    res.json({todos: todos});
});

module.exports = router;