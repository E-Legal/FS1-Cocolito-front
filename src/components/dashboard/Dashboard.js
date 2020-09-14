import React from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { allProject } from '../../store/action/projectActions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.allProject();
  }

  render() {
    const { auth, projects } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <ProjectList projects={projects.project.projects} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
  projects: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    allProject: () => dispatch(allProject())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
