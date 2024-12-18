import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import ApiState from './context/apiState';

const App = () => (
  <ApiState>
  <Router>
    <AppRoutes />
  </Router>
  </ApiState>
);

export default App;


