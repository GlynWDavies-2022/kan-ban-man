const dotenv = require('dotenv');

dotenv.config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
});

console.log(`Environment: ${process.env.NODE_ENV || 'Development'}`);

const express = require('express');

const morgan = require('morgan');

const helmet = require('helmet');

const tasksRoutes = require('./routes/tasks');

const server = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

// ------------------------------------------------------------------------------------------------
// Middleware
// ------------------------------------------------------------------------------------------------

server.use(helmet());

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));

server.use("/api", tasksRoutes);

console.log(`Process Environment: ${process.env.NODE_ENV}`);

console.log(`Application Environment: ${server.get("env")}`);

if (server.get('env') === 'development')
{
    console.log('Morgan added')
    server.use(morgan("dev"));
}

server.listen(PORT, () =>
{
    console.log(`Server listening on port ${PORT}`);
});
