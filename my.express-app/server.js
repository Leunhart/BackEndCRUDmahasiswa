const express = require('express');
const Logger = require('./MiddleWare/Logger');
const Errorhandler = require('./MiddleWare/Errorhandler');
const route = require('./Route/route');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware (place it before routes to log all requests)
app.use(Logger);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello bang');
});

app.use('/daftar', route);

// Error-handling middleware (must be after all routes)
app.use(Errorhandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
