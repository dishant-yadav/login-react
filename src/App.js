import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Success from "./components/Success";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Header /><SignUp /></>}>
          </Route>
          <Route exact path="/login-react" element={<><Header /><SignUp /></>}>
          </Route>
          <Route exact path="/login" element={<><Header /><Login /></>}>
          </Route>
          <Route exact path="/success" element={<Success />}>
          </Route>
          <Route exact path="/error" element={<Error />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
