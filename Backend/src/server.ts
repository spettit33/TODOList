import express from 'express';
import connectToDatabase from './config/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/user", userRouter);
app.use("/tasks",taskRouter);

// Simple endpoint to check if API is working
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello from Express API!");
});

// Connect to the MongoDB database
connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


