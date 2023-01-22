const app = require("./app");
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 8080 || process.env.Port
mongoose.set('strictQuery', true);

// dotenv.config()

// connection to mongoDB database with mongoose

// console.log(process.env.DATABASE_URL)
mongoose.connect("mongodb+srv://abcd:abcd@cluster0.f79szj2.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected to DB")
}).catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log("Server is running")
})
