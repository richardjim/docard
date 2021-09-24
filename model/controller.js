
const db = require("../model");
const cards = db.cards;
const Comment = db.comment;

// Create and Save new cards
exports.createCards = (cards) => {
  return cards.create({
    title: cards.title
  })
    .then((cards) => {
      console.log(">> Created cards: " + JSON.stringify(cards, null, 4));
      return cards;
    })
    .catch((err) => {
      console.log(">> Error while creating cards: ", err);
    });
};

// Create and Save new Comments
exports.createComment = (cardsId, comment) => {
  return Comment.create({
    text: comment.text,
    cardsId: cardsId
  })
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

// Get the comments for a given 
exports.findCardsById = (cards) => {
  return cards.findByPk(cardsId, { include: ["comments"] })
    .then((cards) => {
      return cards;
    })
    .catch((err) => {
      console.log(">> Error while finding card: ", err);
    });
};

// Get the comments for a given comment id
exports.findCommentById = (id) => {
  return Comment.findByPk(id, { include: ["card"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
};

// Get all cards include comments
exports.findAll = () => {
  return cards.findAll({
    include: ["comment"],
  }).then((cards) => {
    return cards;
  });
};