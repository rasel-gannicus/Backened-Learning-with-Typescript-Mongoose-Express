import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true},
    password: { type: String, min: 6, max: 10, Required: false },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// --- pre save middleware
// --- using for hashing password
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.BECRYPT_SALT_ROUNDS),
  );
  next();
});

export const User = model<TUser>('User', userSchema);
