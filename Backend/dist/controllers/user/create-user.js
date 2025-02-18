import { User } from "../../models/user-model.js";
export const createUser = async (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        res.status(400).json({ message: "Required fields for user not provided." });
    }
    try {
        const newUser = new User({
            name,
            email,
            age,
        });
        await newUser.save();
        res.status(201).json();
    }
    catch (err) {
        let error = err;
        res.status(500).json({ message: error.message });
    }
};
