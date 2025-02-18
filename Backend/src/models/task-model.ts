import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    Importance: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        required: true,
        unique: true,
    },
    CreatedAt : {
        type: Date,
        default: Date.now
    },
    Description: {
        type: String,
    },
    Status : {
        type: String,
        enum: ['COMPLETE', 'INPROGRESS', 'BACKLOG']
    }
});

const Task = mongoose.model('Task', taskSchema);