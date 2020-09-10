import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { GetProfile } from '../utils/Api';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile:[],
            notification:[]
        }
    }

    componentDidMount = async () => {
        await GetProfile().then((response) => {
            this.setState({
                profile: response.data
            });
            console.log(this.state.profile);
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12" align="center">
                        <h1>Profile</h1>
                        <h3><Icon.Person size={100} />{this.state.profile.username}</h3>
                        <h3><Icon.Envelope size={100} />{this.state.profile.email}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
