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
// Middleware
// ------------------------------------------------------------------------------------------------

server.use(express.json());

// ------------------------------------------------------------------------------------------------
// Endpoints
// ------------------------------------------------------------------------------------------------

// Default

server.get('/', (req, res) =>
{
    res.send('Welcome to the application!');
});

// Create New

server.post('/tasks', (req, res) =>
{
    const newTask = req.body;

    if (!newTask.task)
    {
        return res.status(400).json({ message: "Task is required" });
    }

    if (!newTask.status)
    {
        return res.status(400).json({ message: "Status is required" });
    }

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// Get All

server.get('/tasks', (req, res) => 
{
    res.json(tasks);
});

// Get One By Id

server.get('/tasks/:id', (req, res) =>
{
    const taskId = Number(req.params.id);

    const task = tasks.find((task) => task.id === taskId);

    res.json(task);
});

server.listen(PORT, () =>
{
    console.log(`Server listening on port ${PORT}`);
});

// Update By Id

server.put('/tasks/:id', (req, res) =>
{
    const id = parseInt(req.params.id);

    const { task, tags, status } = req.body;

    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex < 0)
    {
        return response.status(404).json({ message: "Task not found!" });
    }

    if (task)
    {
        tasks[taskIndex].task = task;
    }

    if (tags) 
    {
        tasks[taskIndex].tags = tags;
    }

    if (status) 
    {
        tasks[taskIndex].status = status;
    }

    res.json(tasks[taskIndex]);
});

// Delete By Id

server.delete('/tasks/:id', (req, res) => 
{
    const id = parseInt(req.params.id);

    console.log(id);

    const taskIndex = tasks.findIndex((t) => t.id === id);

    console.log(taskIndex);

    if (taskIndex < 0)
    {
        return res.status(400).json({ message: `Task with id ${id} not found!` });
    }

    tasks.splice(taskIndex, 1);

    return res.status(200).json({ message: `Task with id ${id} was removed!` });
});