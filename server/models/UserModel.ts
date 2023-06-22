import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  urls: { type: Object },
});

//Bcrypt Functionality:
const SALT_WORK_FACTOR: number = 10;

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);

    this.password = hash;
    return next();
  });
});

const User = mongoose.model('User', userSchema);

export default User;
