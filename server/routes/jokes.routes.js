const JokesController = require('../controllers/jokes.controller');

const { findAllJokes, findOneJoke, createNewJoke, updateJoke, deleteJoke } = JokesController;

module.exports = app => {
    app.get('/api/jokes', findAllJokes);
    app.get('/api/joke/:id', findOneJoke);
    app.patch('/api/jokes/:id', updateJoke);
    app.post('/api/jokes', createNewJoke);
    app.delete('/api/jokes/:id', deleteJoke);
}