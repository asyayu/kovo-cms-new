const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
  },
});

// passport will take care of username and password for us
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
