import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authActions';

const SignedInLinks = (props) => (
  <ul className="right">
    <li><NavLink to="/create">New content</NavLink></li>
    <li><a href="/signin" onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to="/profile" className="btn btn-floating pink lighten-1">PRFL</NavLink></li>
  </ul>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
