import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  const { auth } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white form_other">
        <h5 className="grey-text text-darken-3">{t('create_project.label')}</h5>
        <div className="input-field">
          <label htmlFor="title">{t('title_project.label')}</label>
          <input type="text" id="title" onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="message">{t('content_project.label')}</label>
          <textarea id="message" className="materialize-textarea" onChange={(event) => setMessage(event.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">{t('button_project.label')}</button>
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
