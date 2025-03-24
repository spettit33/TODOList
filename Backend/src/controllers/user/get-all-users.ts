import { Request, Response } from 'express'; // Import types for Request and Response from Express
import {User} from '../../models/user-model.js'; // Import the User model
import { createUserService } from '../../service/data-access.js';

// Define the controller method for getting all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const userService = createUserService();
  try {
    const users = userService.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};