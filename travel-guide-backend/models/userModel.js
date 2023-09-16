import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    
    country: String,
    dateOfBirth: Date,
    languagesKnown: [String],
    bio: String,
    gender: String,
    description: String,
    travelExperience: String,
    expertise: String,
    certificationsAndTraining: String,
    profileImage: String,
    uploadedFiles: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isGuide: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model('Users', UserSchema);

export default User;
