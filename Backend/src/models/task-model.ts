import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Priority: {
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
    },
    Deadline: {
        type: Date 
    }
});

const Task = mongoose.model('Task', taskSchema);