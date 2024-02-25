const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const carData = require('./data.js');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}


// Serve static files from a directory named 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Argentinean Cars Catalog Backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

  
  app.get('/api/manufacturer/:brand',cors(corsOptions), (req, res) => {
    // Extract the brand from the request parameters
    const { brand } = req.params;
    console.log('rodriguez: ',carData)
  
    // Find the car models for the given brand
    const models = carData[brand.toLowerCase()];
    console.log('sebita: ',models)
  
    // If models exist for the brand, send them back in the response
    if (models) {
      res.json({ models });
    } else {
      // If no models found, send a 404 response
      res.status(404).json({ message: 'No models found for this brand' });
    }
  });
