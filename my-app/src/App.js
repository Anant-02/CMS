import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import AddUserForm from './Components/AddUserForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Dashboard
                  setUserState={setUserState}
                  username={userstate.tsname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/add-user-form" element={<AddUserForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
