// const express = require("express");
// const app = express();

// const mongoose = require("mongoose");
// //configure mongoose
// mongoose.connect(
//     "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2" || process.env.MONGODB_URI || "mongodb://localhost/CRUD",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );
// const blogRouter = require("./routes/BlogRoutes");
 
// //middleware
// app.use(express.json());
// app.use("/api/blogs", blogRouter);
 
// app.listen(3002, () => {
//   console.log("Server is running on port 3002");
// });
 
// module.exports = app;