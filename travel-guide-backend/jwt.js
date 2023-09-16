// jwt.js

import jwt from "jsonwebtoken";

// Secret key for signing and verifying JWT tokens (replace with a secure secret)
const JWT_SECRET = 'mySuperSecretKey$%1234567890';

// Function to generate a JWT token
export const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

// Function to verify and decode a JWT token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
