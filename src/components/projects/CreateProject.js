import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/action/projectActions';
import history from '../../history';

const CreateProject = (props) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.createProject(title, message).then(() => {
      history.push('/');
    });
  }

  const { auth } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white form_other">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="message">Project Content</label>
          <textarea id="message" className="materialize-textarea" onChange={(event) => setMessage(event.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
});

const mapDispatchToProps = (dispatch) => ({
  createProject: (title, message) => dispatch(createProject(title, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
