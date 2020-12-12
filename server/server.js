const mongo = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("/upload"));

mongo
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

//use routes
const api = require("./routes/index");
app.use("/api", api);

app.listen(process.env.PORT || 5000, () =>
  console.log(`SERVER RUNNING ON 5000`)
);
