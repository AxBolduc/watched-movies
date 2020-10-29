import './App.css';

import HomePage from './pages/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WatchedPage from './pages/WatchedPage';
import TrendingPage from './pages/TrendingPage';

function App() {
  

  return (
   <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/watched'>
          <WatchedPage />
        </Route>
        <Route path='/trending'>
          <TrendingPage />
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
