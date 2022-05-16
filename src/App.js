import './App.css';
import api from "./service/api"
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './routes/routes';

function App() {
  return (
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
  );
}

export default App;
