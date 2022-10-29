import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import Form from './Components/Edit/Form.js';
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
                <Profile
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
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
