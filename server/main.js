const express = require("express");
const cors = require("cors");
const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());

const showsRouter = require("./Routers/showRouter");


app.use("/api/shows", showsRouter);


app.listen(8000, () => {
  console.log("Server is listening");
});
