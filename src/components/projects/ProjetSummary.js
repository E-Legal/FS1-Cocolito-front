import React from 'react';
import { useTranslation } from 'react-i18next';

export function formatDate(date) {
  const postdate = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return postdate.toLocaleDateString('fr-FR', options);
}
const ProjectSummary = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content green-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <pre>
          {t('posted_by.label')}
          {' '}
          {project.username}
        </pre>
        <p className="grey-text">{formatDate(project.createdDate)}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
