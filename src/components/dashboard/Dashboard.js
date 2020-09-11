import React from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: '10', title: 'Kikou', content: 'Lorem', author: 'Akisen',
        },
        {
          id: '20', title: 'Zbaub', content: 'Lorem', author: 'Quentin',
        },
        {
          id: '30', title: 'Zboub', content: 'Lorem', author: 'Quantify',
        },
      ],
    };
  }

  render() {
    const projects = this.state;
    const { auth } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <ProjectList projects={projects.projects} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(Dashboard);
