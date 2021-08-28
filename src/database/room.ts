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

export const RoomSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    guests:{
        type: [String],
        required: false,
    }
  });

export default mongoose.model<IRoom>('Room', RoomSchema);