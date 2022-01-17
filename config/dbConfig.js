import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    if (!err) console.log('successful connect to db')
    else console.log('failed to connect to db')
}
);
