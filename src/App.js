import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from './component/CountryDetails/CountryDetails';
import NoMatch from './component/NoMatch/NoMatch';
import Done from './component/Done/Done';

function App() {
  return (
      <Router>
        <Switch>
        <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/countryDetails/:cName">
      <CountryDetails/>
      </Route>
      <Route exact path="*">
      <NoMatch/>
      </Route>
      <Route exact path="/Done">
      <Done/>
      </Route>
      </Switch>
      </Router>
       

  );
}

export default App;
