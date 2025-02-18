import { User } from '../../models/user-model.js'; // Import the User model
// Define the controller method for getting all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
