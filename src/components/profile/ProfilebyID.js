import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProjectList from '../projects/ProjectList';
import { getProfileId } from '../../store/action/authActions';
import { allProject } from '../../store/action/projectActions';

const ProfilebyID = (props) => {
  useState(() => {
    const { auth } = props;
    if (auth.auth.IsAuth) {
      props.getProfileId(props.match.params);
      props.allProject();
    }
  });
  const { auth, profile } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;
  return (
    <div className="row">
      <div className="col s6">
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
      </div>
      <div className="col s6">
        <div className="container profile_page">
          <h1>USER POST</h1>
        </div>
        <div className="container">
          <ProjectList projects={profile.project.projects} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
  profile: state,
  projects: state,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileId: (userid) => dispatch(getProfileId(userid)),
  allProject: () => dispatch(allProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilebyID);
