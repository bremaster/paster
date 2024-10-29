import mongoose from "mongoose";


const pasterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        // unique: true,
    },
    content: {
        type: String,
        required: [true, "Please provide a content"],
        // unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const Paster = mongoose.models.pasters || mongoose.model("pasters", pasterSchema);
export default Paster;
