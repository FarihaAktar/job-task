import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import NewEvent from './Components/NewEvent/NewEvent';
import SingleEvent from './Components/SingleEvent/SingleEvent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/single-event/:id">
          <SingleEvent/>
          
        </Route>
        <Route path="/new-event">
          <NewEvent/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
