import React from 'react';
import '../../../css/TextContainer.css';
import { useTranslation } from 'react-i18next';

const TextContainer = ({ users }) => {
  const { t } = useTranslation();
  return (
    <div className="textContainer">
      {
      users
        ? (
          <div>
            <h4>{t('text_container.label')}</h4>
            <div className="activeContainer">
              <h5>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h5>
            </div>
          </div>
        )
        : null
    }
    </div>
  );
};

export default TextContainer;
