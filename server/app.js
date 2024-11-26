const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(taskRouter);  

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`connected at ${PORT}`);
  mongoose.connect(process.env.MONGO_URI);
})

