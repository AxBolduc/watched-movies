import './App.css';

import {BrowserRouter} from 'react-router-dom';
import Container from './pages/Container';
import NavBar from './components/NavBar'

function App() {


  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
