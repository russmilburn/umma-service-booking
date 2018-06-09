const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
  bookingId:{type:String, index:true},
  calendarId: String,
  name: String,
  starts : String,
  ends : String,
});

module.exports = bookingSchema;