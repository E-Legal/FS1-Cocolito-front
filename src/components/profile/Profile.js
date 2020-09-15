import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../css/Profile.css';
import { getProfile } from '../../store/action/authActions';

const Profile = (props) => {
  useState(() => {
    const { auth } = props;
    if (auth.auth.IsAuth) {
      props.getProfile();
    }
  });
  const { auth, profile } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;
  return (
    <div className="container profile_page" align="center">
      <div className="row">
        <h1>PROFILE</h1>
        <AccountCircleIcon style={{ fontSize: 90, color: '#FFF' }} />
      </div>
      <div className="row profile_content">
        <h5>USERNAME :</h5>
        <span>{profile.auth.profile.username}</span>
        <h5>ID :</h5>
        <span>{profile.auth.profile.id}</span>
        <h5>EMAIL :</h5>
        <span>{profile.auth.profile.email}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
  profile: state,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
