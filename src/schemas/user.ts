import mongoose from 'mongoose'
import type { Schema } from 'mongoose'

export type UserDocument = {
  _id: string
  email: string
  password?: string
  secret?: string // for 2fa
  passwordless?: boolean
  twoFactor?: boolean
  createdAt: string
  updatedAt: string
}

const userSchema: Schema = new mongoose.Schema({
  email: String,
  password: String,
  secret: String,
  passwordless: Boolean,
  twoFactor: Boolean
}, { timestamps: true })

export default mongoose.model<UserDocument>('users', userSchema)
