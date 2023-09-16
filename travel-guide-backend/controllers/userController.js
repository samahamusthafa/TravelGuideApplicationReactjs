import bcrypt from "bcrypt"
const saltRounds = 10; // Adjust the number of salt rounds as needed for security
import { generateToken, verifyToken } from "../jwt.js";
import User from "../models/userModel.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';





export const UserRegister = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        


        // Check if the email or phone already exists in the database
        const existingUserWithEmail = await User.findOne({ email });
        const existingUserWithPhone = await User.findOne({ phone });

        if (existingUserWithEmail && existingUserWithPhone) {
            return res.status(400).json({ message: 'Email and phone number already in use' });
        } else if (existingUserWithEmail) {
            return res.status(400).json({ message: 'Email already in use' });
        } else if (existingUserWithPhone) {
            return res.status(400).json({ message: 'Phone number already in use' });
        }


        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User with this email does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = generateToken(user._id);

        // Return the token in the response
        res.status(200).json({ message: 'Login successful', token }); // Include the token here
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}







