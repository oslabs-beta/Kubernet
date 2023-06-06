const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  urls: { type: Object, required: true },
});

//Bcrypt Functionality:
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

//pre.('save') hook runs a function before the document is saved to the collection
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    
    // reasing document's password to its hashed version
    this.password = hash;
    return next();
  });
});


const User = mongoose.model('User', userSchema);
module.exports = User;
