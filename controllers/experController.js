import ExperModel from '../models/experModel.js';

export const addExper = async (req, res) => {
    const exper = new ExperModel(req.body);

    await exper.save()
    res.send(exper)
}

export const getExper = async (req, res) =>{
    const expers = await ExperModel.find({});
    res.send(expers);
}