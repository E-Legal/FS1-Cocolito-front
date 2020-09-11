import React from 'react';
import { GetProfile } from '../../utils/Api';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
    state = {
        username: '',
        id: '',
        email: ''
    }

    componentDidMount() {
        const { auth } = this.props;
        if (auth.auth.IsAuth) {
            GetProfile().then((response) => {
                this.setState({
                    username: response.data.username,
                    id: response.data.id,
                    email: response.data.email,
                })
            })
        }
    }

    render() {
        const { auth } = this.props;
        if (!auth.auth.IsAuth) return <Redirect to="/signin" />
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

const mapStateToProps = (state) => ({
    auth: state,
});

export default connect(mapStateToProps)(Profile);
