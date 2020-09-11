import React from 'react';

class ProfilebyID extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        Profile -
        { id }
      </div>
    );
  }
}

export default ProfilebyID;
