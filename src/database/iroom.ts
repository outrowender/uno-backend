import mongoose from ".";

export interface IRoom extends mongoose.Schema{
    owner: {
        type: String,
        required: true,
    },
    guests:{
        type: [String],
        required: false,
    }
}