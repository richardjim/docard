
const Controller = require ('./controllers/controller');
const express = require('express');



const router = require("express").Router();

router.post('/create', Controller.createCards);
router.post('/comment/create', Controller.createComment);
router.get('/:id', Controller.findCardById);
router.get('/:id',Controller.findCommentById);
// router.delete('deleteComment/:id', Controller.deleteComment);
router.delete('/:id', Controller.deleteAll);

app.use('/', router);

module.exports = router;