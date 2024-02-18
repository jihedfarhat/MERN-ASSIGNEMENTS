import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import MainPage from './containers/MainPage'
import AddPage from './containers/AddPage'
import EditPage from './containers/EditPage'

function App() {

  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/new">
            <AddPage/>
          </Route>
          <Route exact path="/edit/:id">
            <EditPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
