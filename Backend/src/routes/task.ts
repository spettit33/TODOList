import express from 'express';
import { getTaskByUser } from '../controllers/task/get-task-by-user.js';

const router = express.Router();

router.get('/:userId', getTaskByUser);

export default router;