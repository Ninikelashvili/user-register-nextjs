import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  date: String,
  age: Number,
  status: String,
  role: String,
});

const User = models.user || model("user", userSchema);
export default User;
