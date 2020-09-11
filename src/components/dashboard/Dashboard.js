import React from 'react';
import ProjectList from '../projects/ProjectList';

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

export default Dashboard;
