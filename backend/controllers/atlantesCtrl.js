// import the atlante model
const Atlante = require("../models/atlanteModel");

// create a new atlante
exports.createAtlante = (req, res, next) => {
    // delete the id from the request body
    delete req.body._id;
    // create a new atlante
    const atlante = new Atlante({
        ...req.body,
    });
    // save the atlante in the DB
    atlante
        .save()
        .then(() => res.status(201).json({ message: "atlante enregistré !" }))
        .catch((error) =>
            res.status(400).json({ message: "atlante non enregistré !" })
        );
};

// get all atlantes
exports.getAllAtlantes = (req, res, next) => {
    Atlante.find()
        .then((atlantes) => res.status(200).json(atlantes))
        .catch((error) =>
            res.status(400).json({ message: "atlantes non trouvés !" })
        );
};

// get one atlante
exports.getOneAtlante = (req, res, next) => {
    Atlante.findOne({ _id: req.params.id })
        .then((atlante) => res.status(200).json(atlante))
        .catch((error) =>
            res.status(404).json({ message: "atlante non trouvé !" })
        );
};

// modify one atlante
exports.modifyAtlante = (req, res, next) => {
    Atlante.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: "atlante modifié !" }))
        .catch((error) =>
            res.status(400).json({ message: "atlante non modifié !" })
        );
};

// delete one atlante
exports.deleteAtlante = (req, res, next) => {
    Atlante.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "atlante supprimé !" }))
        .catch((error) =>
            res.status(400).json({ message: "atlante non supprimé !" })
        );
};

// delte all atlantes
exports.deleteAllAtlantes = (req, res, next) => {
    Atlante.deleteMany()
        .then(() => res.status(200).json({ message: "atlantes supprimés !" }))
        .catch((error) =>
            res.status(400).json({ message: "atlantes non supprimés !" })
        );
};
