import { Schema } from "mongoose";
import mongoose from "../database";

const RoomSchema: Schema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    guests:{
        type: [String],
        required: false,
    }
})

export default mongoose.model("Room", RoomSchema)