
const db = require("../model");
const cards = db.cards;
const Comment = db.comment;

// router.get('/', (req, res) =>
//   Gig.findAll()
//     .then(gigs => {
//         console.log(gigs);
//       res.sendStatus(200);
//     })
//     .catch((err) => console.log(err))
// );

exports.create = (req,res) =>{
  if(!req.body.title) {
    res.status(400).send({
      message:"content can not be empty"
    });
    return;
  };


// Create and Save new cards
exports.createCards = (cards) => {
  return Cards.create({
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
  })
    .catch((err) => {
      console.log(err);
    });
};

 

exports.deleteComment = (cards) => {
  return Cards.delete({
    title: cards.title
  })
    .then((cards) => {
      console.log(">> delete card: " + JSON.stringify(cards, null, 4));
      return cards;
    })
    .catch((err) => {
      console.log( err);
    });
};

exports.deleteComment = (req, res) => {
  const id = req.params.id;

  comment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  cards.destroy({
    where: {},
    truncate: false
  })
    .then(cards => {
      res.send({ message: `${cards}  were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

}