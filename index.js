const express = require('express');

const server = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

const tasks = [
    {
        id: 1,
        task: "Learn Claude",
        tags: ["Claude", "AI"],
        status: "To Do"
    },
    {
        id: 2,
        task: "Learn PGP",
        tags: ["PGP", "Encryption"],
        status: "To Do"
    },
    {
        id: 3,
        task: "Learn Node",
        tags: ["Node", "JavaScript"],
        status: "Doing"
    }
];

server.get('/', (req, res) =>
{
    res.send('Welcome to the application!');
});

server.get('/tasks', (req, res) => 
{
    res.send(JSON.stringify(tasks));
});

server.listen(PORT, () =>
{
    console.log(`Server listening on port ${PORT}`);
});