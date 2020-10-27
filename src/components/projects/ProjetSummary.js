import React from 'react';

export function formatDate(date) {
  const postdate = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return postdate.toLocaleDateString('fr-FR', options);
}

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content green-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <pre>
        Posted by
        {' '}
        {project.username}
      </pre>
      <p className="grey-text">{formatDate(project.createdDate)}</p>
    </div>
  </div>
);

export default ProjectSummary;
