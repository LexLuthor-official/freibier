import './App.css';
import Home from './Components/Home.jsx';
import Error from './Components/Error.jsx';
import Login from './Components/Login.jsx';
import Form from './Components/Form.jsx';
import UrlStorage from './Components/UrlStorage.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    
    <div className="app">
      <Router>
      <Switch>
      <Route path="/UrlStorage" component={UrlStorage} />
      <Route path="/Form" component={Form} />  
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route component={Error} />
    </Switch>
    </Router>
    </div>
    
  );
}

export default App;
