import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/cvcharger', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB is connected');
    }
    catch {
        console.log('Something wrong!');
    }
}