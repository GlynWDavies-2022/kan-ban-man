const express = require('express');

const server = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

const tasks = [
    {
        id: 1,
        task: "Learn Claude",
        tags: ["Claude", "AI"],
        status: "todo"
    },
    {
        id: 2,
        task: "Learn PGP",
        tags: ["PGP", "Encryption"],
        status: "todo"
    },
    {
        id: 3,
        task: "Learn Node",
        tags: ["Node", "JavaScript"],
        status: "doing"
    }
];

// ------------------------------------------------------------------------------------------------
// Endpoints
// ------------------------------------------------------------------------------------------------

// Default

server.get('/', (req, res) =>
{
    res.send('Welcome to the application!');
});

// Create New

server.post('/tasks', () => { });

// Get All

server.get('/tasks', (req, res) => 
{
    res.send(JSON.stringify(tasks));
});

// Get One By Id

server.get('/tasks/:id', (req, res) =>
{
    const taskId = Number(req.params.id);

    const task = tasks.find((task) => task.id === taskId);

    res.send(JSON.stringify(task));
});

server.listen(PORT, () =>
{
    console.log(`Server listening on port ${PORT}`);
});