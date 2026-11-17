const express = require('express');

const server = express();

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

server.listen(3000, () =>
{
    console.log("Server listening on port 3000")
});