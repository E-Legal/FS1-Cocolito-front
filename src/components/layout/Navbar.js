import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';

const Navigation = (props) => {
  const { auth } = props;
  console.log(auth.auth);
  const links = auth.auth.IsAuth ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Cocolito</Link>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(Navigation);
