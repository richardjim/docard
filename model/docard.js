const Sequelize = require('sequelize');
const db = require('../config/database');

const Todo = db.define('docard', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  
});

Todo.sync().then(() => {
  console.log('table created');
});
module.exports = Todo;