import ExperModel from '../models/experModel.js';


// Ajouter une expérience
export const addExper = async (req, res) => {
    const exper = new ExperModel(req.body);

    await exper.save()
    res.send(exper)
}

// Lire les expériences
export const getExpers = async (req, res) =>{
    const expers = await ExperModel.find({});
    res.send(expers);
}

// Lire une expérience
export const getExper = async (req, res) =>{
    console.log(req.params.id);
    const exper = await ExperModel.find({_id: req.params.id});
    res.send(exper);
}