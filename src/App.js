import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import RecruiterLogin from './components/RecruiterLogin';
import RecruiterRegister from './components/RecruiterRegister';
import RecruiterPage from './components/RecruiterPage';
import Create from './components/Create';
import Register from './components/Register';
import LoginChoice from './components/LoginChoice';
import AppliedCandiated from './components/AppliedCandiated';
import Edit from './components/Edit';

function App() {
  const recruiter = localStorage.getItem('RecruiterToken');
  console.log(recruiter);
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login-choice">
          <LoginChoice />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/recruiter-login">
          <RecruiterLogin />
        </Route>
        <Route path="/recruiter-register">
          <RecruiterRegister />
        </Route>
        {recruiter ?
          <>
            <Route path="/recruiter">
              <RecruiterPage />
            </Route>
            <Route path="/recruiter-create">
              <Create />
            </Route>
            <Route path="/recruiter-edit">
              <Edit />
            </Route>
            <Route path="/recruiter-appliedCandidates">
              <AppliedCandiated />
            </Route>
          </>
          :
          <Route path="/recruiter-login">
            <RecruiterLogin />
          </Route>
        }


      </Switch>
    </div>
  );
}

export default App;
