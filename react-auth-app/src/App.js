import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from './components/auth/Login';
import Form from './components/auth/Form';
import Logout from './components/auth/Logout';
import Root from './components/auth/Root';
import Movies from './components/movies/Movies';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Root} />
        <Route exact path="/login" component={Login} />
        { localStorage.getItem("is_logged_in") ? 
        <Route exact path="/form" component={Form} />:
        <Route exact path="/login" component={Login} />} 
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/movies" component={Movies} />
        
      </div>
    </Router>
    </Provider>
  );
}

export default App;