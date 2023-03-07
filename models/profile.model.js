const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: ""
    },
    profession: {
        type: String,
        default: "",
    },
    online: {
      type: Boolean,
      default: false,
    },
    lastseen: {
      type: Date,
      default: Date(),
    },
    blogs: [
      {
        _id:{
          type:  mongoose.Schema.Types.ObjectId,
          ref: "BlogPost",
        }
      }
    ],
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model("Profile", ProfileSchema);