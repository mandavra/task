const { Schema, model, mongoose } = require("mongoose");

const usertaskSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const user_task = model("uer_tasks", usertaskSchema);

module.exports = user_task;