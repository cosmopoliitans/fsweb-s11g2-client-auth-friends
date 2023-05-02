import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import LogOut from "./components/LogOut";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1>FRIENDS DATABASE</h1>
          <Link to="/login">LOGIN.</Link>
          <Link to="/friends">FRIENDLIST.</Link>
          <Link to="/friendsadd">ADDFRIEND.</Link>
        </div>
        <LogOut />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/friends">
            <FriendsList />
          </Route>
          <Route path="/friends/add">
            <AddFriend />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
