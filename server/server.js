const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("connected to the database");
});

process.on("unhandledRejection", (err) => {
  app.close(() => {
    console.log(err.name, err.message);
    process.exit(1);
  });
});

app.listen(process.env.PORT, () => {
  console.log("app running at port 3000");
});
