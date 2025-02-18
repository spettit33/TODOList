import express from 'express';
import { getAllUsers } from '../controllers/user/get-all-users.js';
import { createUser } from '../controllers/user/create-user.js';
const router = express.Router();
router.get('/', getAllUsers);
router.post('/', createUser);
export default router;
