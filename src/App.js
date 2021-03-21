import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Profile } from "./pages/Profile"
import { Alert } from "./components/Alert";
import { AlertState } from "./Context/Alert/AlertState";
import { GithubState } from "./Context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'test-alert'}}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
