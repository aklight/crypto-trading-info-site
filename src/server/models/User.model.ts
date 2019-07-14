import mongoose, { Schema } from 'mongoose';

import { IUser } from './User.interface';


const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model<IUser>('users', UserSchema);

export default User;
