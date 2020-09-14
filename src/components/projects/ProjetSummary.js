import React from 'react';

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content green-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <pre>
        Posted by {project.username}
      </pre>
      <p className="grey-text">{project.createdDate}</p>
    </div>
  </div>
);

export default ProjectSummary;
