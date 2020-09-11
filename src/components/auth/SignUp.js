import React from 'react';
//import { UserRegister } from '../../utils/Api';
import { connect } from 'react-redux';
import { logIn } from '../../store/action/authActions';
import history from '../../history';

class SignUp extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logIn(this.state);
        history.push('/signin');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
