import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://sa:pererecasuicida911@cluster0.ntdct.mongodb.net/uno?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

export default mongoose;