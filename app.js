const express = require("express");
const cors = require("cors");
const db = require("./model");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};
 
 app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World." });
});

const controller = require("./controllers/controller");





app.post("/create", (req ,res) =>{
  console.log(controller.createCards(req.body))
res.send (req.body);
});

app.post("/create/comment", (req, res) => {
    console.log(controller.createComment(req.body));
    res.send('controller.createComment');

  });

// app.get("/create", (req ,res) =>{
//   console.log(req.body)
// res.send (req.body);
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));



const run = async () => {
  const cards1 = await controller.createCards({
    title: "cards#1",
  });
  
  const cards2 = await controller.createCards({
    title: "cards#2",
  });

  const comment1 = await controller.createComment(cards1.id, {
    text: "Good job!",
  });

  await controller.createComment(cards1.id, {
    text: "One of the best!",
  });

  const comment2 = await controller.createComment(cards2.id, {
    text: "Hi, thank you!",
  });

  await controller.createComment(cards2.id, {
    text: "Awesome!",
  });

  const cards1Data = await controller.findCardById(cards1.id);
  console.log(
    ">> cards id=" + cards1Data.id,
    JSON.stringify(cards1Data, null, 2)
  );

  const cards2Data = await controller.findCardById(cards2.id);
  console.log(
    ">> card Id=" + cards2Data.ld,
    JSON.stringify(cards2Data, null, 2)
  );

  const comment1Data = await controller.findCommentById(comment1.id);
  console.log(
    ">> Comment id=" + comment1.id,
    JSON.stringify(comment1Data, null, 2)
  );
 
  
  

  const comment2Data = await controller.findCommentById(comment2.id);
  console.log(
    ">> Comment id=" + comment2.id,
    JSON.stringify(comment2Data, null, 2)
  );

async function start() {
  const cards = await controller.findAll();
  console.log(">> All cards", JSON.stringify(cards, null, 2));
};

async function destroy(){
const cards = await controller.deleteAll(cards);
console.log('cards deleted',JSON.stringify(cards, null, 2));

};}
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});