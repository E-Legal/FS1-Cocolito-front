import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Navigation from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Profile from './components/profile/Profile';
import ProfilebyID from './components/profile/ProfilebyID';
import Chatroom from './components/chatroom/Chatroom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import ChatLobby from './components/chatroom/ChatLobby';

function App() {
  return (
    <Router history={history}>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/:id" component={ProfilebyID} />
          <Route path="/chatlobby" component={ChatLobby} />
          <Route path="/chatroom" component={Chatroom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
