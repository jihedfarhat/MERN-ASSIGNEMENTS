import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import MainContainer from './containers/MainContainer'
import PlayerContainer from './containers/PlayerContainer'
import StatusContainer from './containers/StatusContainer'

function App() {
  
  const history = createBrowserHistory();

  return (
    <div className="bg-light py-4">
      <Router history={history}>
        <Switch>
          <Route exact path="/players/list">
            <MainContainer>
              <PlayerContainer/>
            </MainContainer>
          </Route>
          <Route exact path="/players/addplayer">
            <MainContainer>
              <PlayerContainer/>
            </MainContainer>
          </Route>
          <Route exact path="/status/game/:id">
            <MainContainer>
              <StatusContainer/>
            </MainContainer>
          </Route>
          <Route exact path="/">
            <Redirect to="/players/list"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
