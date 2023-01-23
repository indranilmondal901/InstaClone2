const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 8081 || process.env.PORT
mongoose.set('strictQuery', true);

dotenv.config()

// connection to mongoDB database with mongoose

// console.log(process.env.DATABASE_URL)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected to DB")
}).catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log("Server is running")
})
