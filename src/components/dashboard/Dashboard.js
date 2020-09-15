import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProjectList from '../projects/ProjectList';
import { allProject } from '../../store/action/projectActions';

const Dashboard = (props) => {
  useState(() => {
    props.allProject();
  });
  const { auth, projects } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12">
          <ProjectList projects={projects.project.projects} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
  projects: state,
});

const mapDispatchToProps = (dispatch) => ({
  allProject: () => dispatch(allProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
