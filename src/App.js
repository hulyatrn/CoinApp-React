import './App.css';
import './style/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThemeContextProvider, {ThemeContext} from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Coin from './components/Coin';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <Router>
          <div className="App">
        <ThemeContextProvider>
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/coin">
            <Coin/>
        </Route>
        <Route path="/coins/:id">
            <CoinDetails/>
        </Route>
        </Switch>
        <ThemeToggle/>
        </ThemeContextProvider>
      </div>
    </Router>
  );
}

export default App;
