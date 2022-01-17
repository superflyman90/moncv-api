import mongoose from 'mongoose';

const experSchema = new mongoose.Schema({
    name: String,
    body: String,
    year: {
        type: Number
    },
    employee: String

});

const Exper = mongoose.model('Exper', experSchema);

export default Exper