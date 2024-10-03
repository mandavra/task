const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect("mongodb+srv://man:rL6LlQQ9QYjhQppV@cluster0.yxujymc.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};
