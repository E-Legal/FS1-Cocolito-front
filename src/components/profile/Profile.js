import React from 'react';
import { GetProfile } from '../../utils/Api';

class Profile extends React.Component {
    state = {
        username: '',
        id: '',
        email: ''
    }

    componentDidMount() {
        GetProfile().then((response) => {
            this.setState({
                username: response.data.username,
                id: response.data.id,
                email: response.data.email,
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Mon profile</h1>
                    <h5>Username : {this.state.username}</h5>
                    <h5>Id : {this.state.id}</h5>
                    <h5>Email : {this.state.email}</h5>
                </div>
            </div>
        )
    }
}

export default Profile;
