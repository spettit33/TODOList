import { Task } from "../../models/task-model";
import { Request, Response } from 'express';
import { createTaskService } from "../../service/data-access.js";

export const getTaskByUser = async (req: Request, res: Response): Promise<void> => {
    const taskService = createTaskService();

  try {
    const userId = req.params["userId"] as string;

    if (!userId) res.status(400).json({message: "userId parameter is required."})

    const tasks = await taskService.getByUser(userId);

    if ( tasks.length === 0) {
        res.status(404).json({ message: 'No tasks found for this user.' });
      } else {
        res.json(tasks);
      }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};