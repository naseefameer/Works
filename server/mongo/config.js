const mongoose = require("mongoose");

// let uri = "mongodb://localhost:27017/rybbon";
let uri = "mongodb+srv://admin:yjaHsol9GAjYMgfW@cluster0.t8v120e.mongodb.net/rybbon?retryWrites=true&w=majority";

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection;
db.once("open", () => console.info("Connected to MongoDB Sample"));
db.on("error", console.error.bind(console, "connection error:"));

module.exports = mongoose;