import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  role: "USER" | "ADMIN" | "RESELLER";
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["USER", "ADMIN", "RESELLER"], default: "USER" },
  createdAt: { type: Date, default: Date.now },
});

export default models.User || model<IUser>("User", UserSchema);
