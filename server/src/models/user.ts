import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    },
    lobbys: [{
        type: mongoose.Types.ObjectId,
        ref: "Lobby"
    }],
    watchedItems: [{
        type: mongoose.Types.ObjectId,
        ref: "Items"
    }]
})

export default mongoose.model("User", userSchema)