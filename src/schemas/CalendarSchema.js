const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let calendarSchema = new Schema({
  calendarId:{type:String, index:true},
  dayStarts: String,
  dayEnds : String,
});

module.exports = calendarSchema;