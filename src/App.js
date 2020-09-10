import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import cookie from 'react-cookies';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Stock from './components/Stock';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    const isAuth = (cookie.load('id') !== undefined);
    this.state = {
      isAuth,
    };
    this.renderLogin = this.renderLogin.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    const isAuth = (cookie.load('id') !== undefined);
    this.setState({
      isAuth,
    });
  }

  callback(status) {
    this.setState({
      isAuth: status,
    });
    if (!status) {
      cookie.remove('id');
      cookie.remove('token');
    }
  }

  renderLogin() {
    return (
      <Login callback={this.callback} />
    );
  }

  renderNavbar() {
    const { isAuth } = this.state;
    if (!isAuth) {
      return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Cocolito</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">
                  <Button variant="primary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Cocolito</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/stock">Stock</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/home">
                <Button onClick={() => this.callback(false)} variant="danger">Logout</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  render() {
    return (
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
          </Switch>
          <div>
            {this.renderNavbar()}
            <Route path="/login" render={this.renderLogin} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/stock" component={Stock} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
    );
  }
}

export default App;
