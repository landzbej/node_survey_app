const express = require('express')


const bodyParser = require('body-parser')


const app = express()
const port = 3002

const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// const express = require("express");
// const app = express();

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    // "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2" || process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    "mongodb://0.0.0.0:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2" || process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
const blogRouter = require("./routes/BlogRoutes");
 
//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
 
// app.listen(3002, () => {
//   console.log("Server is running on port 3002");
// });
 
// module.exports = app;

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)

  // init().then(() => {
  //   console.log(`App running on port ${port}.`)
  //   app.listen(3000)
  // }
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
  