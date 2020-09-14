import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getProfileId } from '../../store/action/authActions';

class ProfilebyID extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    if (auth.auth.IsAuth) {
      this.props.getProfileId(this.props.match.params);
    }
  }

  render() {
    const { auth, profile } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />;
    return (
      <div className="container profile_page" align="center">
        <div className="row">
          <h1>Profile</h1>
          <AccountCircleIcon style={{ fontSize: 90, color: '#FFF' }} />
        </div>
        <div className="row profile_content">
          <h5>Username :</h5>
          <span>{profile.auth.profile.username}</span>
          <h5>Id :</h5>
          <span>{profile.auth.profile.id}</span>
          <h5>Email :</h5>
          <span>{profile.auth.profile.email}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
  profile: state,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileId: (userid) => dispatch(getProfileId(userid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilebyID);
