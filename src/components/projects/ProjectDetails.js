import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { formate_date } from './ProjetSummary';
import { oneProject } from '../../store/action/projectActions';

const ProjectDetails = (props) => {
  useState(() => {
    props.oneProject(props.match.params);
  });
  const { auth, project } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            {project.project.project.title}
            -
            {project.project.project.id}
          </span>
          <p>{project.project.project.message}</p>
        </div>
        <div className="card-action grey lighten-4 green-text">
          <Link to={`/profile/${project.project.project.user_id}`} key={project.project.project.user_id}>
            <pre>
              Posted by
              {' '}
              {project.project.project.username}
            </pre>
          </Link>
          <div>{formate_date(project.project.project.createdDate)}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
  project: state,
});

const mapDispatchToProps = (dispatch) => ({
  oneProject: (id) => dispatch(oneProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
