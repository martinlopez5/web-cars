import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css'; // Make sure this path is correct

// Home component that displays the search bar and manufacturer links
const Home = () => (
  <div className="home">
    <h1>AUTOS ARGENTINA</h1>
    <div className="search-bar">
      <input type="text" placeholder="Type the model you are looking for" />
      <button>Search</button>
    </div>
    <div className="manufacturers">
      {['RENAULT', 'VOLKSWAGEN', 'FIAT', 'CHEVROLET', 'FORD', 'PEUGEOT', 'BMW', 'MERCEDES BENZ', 'AUDI', 'MOTOS'].map(brand => (
        <a key={brand} href={`/manufacturer/${brand.toLowerCase()}`} className="manufacturer-box">
          {brand}
        </a>
      ))}
    </div>
  </div>
);

// Manufacturer component that fetches and displays models for a given brand
const Manufacturer = () => {
  const [models, setModels] = React.useState([]);
  const { brand } = useParams();

  React.useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/manufacturer/${brand}`);
        const data = await response.json();
        if (response.ok) {
          setModels(data.models);
        } else {
          throw new Error(data.message || 'Error fetching data');
        }
      } catch (error) {
        console.error('There was an error fetching the car models:', error);
      }
    };

    fetchModels();
  }, [brand]);

  return (
    <div>
      <h1>{brand.toUpperCase()}</h1>
      <div className="models-container">
        {models.length > 0 ? (
          models.map((model) => (
            <div key={model.id} className="model">
              <img src={`http://localhost:3001${model.imageUrl}`} alt={model.name} />
              <div className="model-details">
                <h2>{model.name}</h2>
                <p>{model.description}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          ))
        ) : (
          <p>No models found for {brand}</p>
        )}
      </div>
    </div>
  );
};

// The main App component that sets up the Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manufacturer/:brand" element={<Manufacturer />} />
      </Routes>
    </Router>
  );
}

export default App;


