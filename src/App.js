import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Root from './Root'
import SignIn from './SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>HI</header>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
