import './App.css';

import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import Customers from './routes/customers/customers.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='customers/*' element={<Customers />} />
      </Route>
    </Routes>
  );
}

export default App;
