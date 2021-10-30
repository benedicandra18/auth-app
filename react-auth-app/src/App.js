import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from './components/auth/Login';
import Form from './components/auth/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/form" component={Form} />
      </div>
    </Router>
  );
}

export default App;