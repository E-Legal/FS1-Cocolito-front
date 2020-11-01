import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../css/Profile.css';
import { useTranslation } from 'react-i18next';
import { getProfile } from '../../store/action/authActions';
import { projectByMe } from '../../store/action/projectActions';
import ProjectList from '../projects/ProjectList';

const Profile = (props) => {
  // eslint-disable-next-line consistent-return
  useState(() => {
    const { auth } = props;
    if (auth.auth.IsAuth) {
      props.getProfile();
      props.projectByMe();
    } else {
      return <Redirect to="/signin" />;
    }
  });

  const { profile } = props;
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="col s12 m6 l6">
        <div className="container profile_page" align="center">
          <div className="row">
            <h1>{t('profile.label')}</h1>
            <AccountCircleIcon style={{ fontSize: 90, color: '#FFF' }} />
          </div>
          <div className="row profile_content">
            <h5>
              {t('username.label')}
              {' '}
              :
            </h5>
            <span>{profile.auth.profile.username}</span>
            <h5>
              {t('id.label')}
              {' '}
              :
            </h5>
            <span>{profile.auth.profile.id}</span>
            <h5>
              {t('email.label')}
              {' '}
              :
            </h5>
            <span>{profile.auth.profile.email}</span>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l6">
        <div className="container profile_page">
          <h1>{t('user_post.label')}</h1>
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
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
  projectByMe: () => dispatch(projectByMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
