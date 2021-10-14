
const db = require("../model");
const Card = db.cards;
const Comment = db.comments;

// router.get('/', (req, res) =>
//   Gig.findAll()
//     .then(gigs => {
//         console.log(gigs);
//       res.sendStatus(200);
//     })
//     .catch((err) => console.log(err))
// );

// exports.create = (req,res) =>{
//   if(!req.body.title) {
//     res.status(400).send({
//       message:"content can not be empty"
//     });
//     return;
//   };


// Create and Save new cards
exports.createCards = (card) => {
  return Card.create({
    title: card.title
  })
    .then((card) => {
      console.log(">> Created card: " + JSON.stringify(card, null, 4));
      return card;
    })
    .catch((err) => {
      console.log(">> Error while creating cards: ", err);
    });
};

// Create and Save new Comments
exports.createComment = (cardsId, comment) => {
  return Comment.create({
    text: comment.text,
    cardId: cardsId
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
exports.findCardById = (cardId) => {
  return Card.findByPk(cardId, { include: ["comments"] })
.then((card) => {
      return card;
    })
    .catch((err) => {
      console.log(">> Error while finding card: ", err);
    });
};

    // Get the comments for a given comment id
exports.findCommentById = (Id) => {
  return Comment.findByPk(Id, { include: ["card"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
};

// exports.deleteAll = () => {
//   Card.beforeDestroy(async card => {
//     await Comment.destroy({ where: { cardId: card.id },truncate:false})
//   })
//     .then(cards => {
//       res.send({ message: `${cards}  were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all "
//       });
//     });
// };

exports.deleteCard = () => {
  Card.beforeDestroy(async card => {
    await Comment.destroy({ where: { cardId: card.id },truncate:false})
  })
    .then(cards => {
      res.send({ message: `${cards}  were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all "
      });
    });
};



exports.deleteAll = () => {
  Card.beforeDestroy(async comment => {
    await Comment.destroy({ where: {comment},truncate:false})
  })
    .then(cards => {
      res.send({ message: `${cards}  were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all "
      });
    });
};

// Get all cards include comments
exports.findAll = () => {
  return Card.findAll({
    include: ["comment"],
  }).then((cards) => {
    return cards; 
  })
    .catch((err) => {
      console.log(err);
    });
};

