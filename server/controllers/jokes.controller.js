const Joke = require('../models/jokes.model');

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                res.json({ jokes: allJokes })
            })
            .catch((err) => {
                res.json(err)
            });
    },

    findOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneJoke) => { res.json({ joke: oneJoke }) })
            .catch((err) => { res.json(err) })
    },

    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                res.json({ joke: newJoke })
            })
            .catch((err) => { res.json(err) })
    },

    updateJoke: (req, res) => {
        Joke.updateOne({ _id: req.params.id }, req.body)
            .then(updatedJoke => {
                res.json({ joke: updatedJoke })
            })
            .catch((err) => { res.json(err) })
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ result: result })
            })
            .catch((err) => { res.json(err) })
    }
}