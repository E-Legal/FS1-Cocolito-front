import React from 'react';

export function formate_date(date) {
  const _date = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return _date.toLocaleDateString('fr-FR', options);
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
      <p className="grey-text">{formate_date(project.createdDate)}</p>
    </div>
  </div>
);

export default ProjectSummary;
