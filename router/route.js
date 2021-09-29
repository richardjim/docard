
const Controller = require ('./controllers/controller');
const express = require('express');

const router = express();



router.post('AddCards/', Controller.createCards);
router.post('AddComment/', Controller.createComment);
router.get('/:id', Controller.findCardsById);
router.get('/:id',Controller.findCommentById);
router.delete('delete/:id', Controller.deleteComment);
router.delete('delete/:id', Controller.deleteCards);

app.use('../model')

module.exports = router;