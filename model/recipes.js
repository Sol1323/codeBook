'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var RecipesSchema = new Schema({
  title: String,
  language: String,
  content: String,
  share: Boolean
});

//export our module to use in server.js
module.exports = mongoose.model('Recipe', RecipesSchema);
