import mongoose from "mongoose";
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// const UserModel = mongoose.model("users", UserSchema);

// export default UserModel;

const UserModel = mongoose.model("users", usersSchema);
export default UserModel;
