import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProfilebyID extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { auth } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />
    return (
      <div>
        Profile -
        { id }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(ProfilebyID);
