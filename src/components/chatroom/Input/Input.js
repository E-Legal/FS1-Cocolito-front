import React from 'react';
import '../../../css/Input.css';
import { useTranslation } from 'react-i18next';

const Input = ({ setMessage, sendMessage, message }) => {
  const { t } = useTranslation();
  return (
    <form className="form_page">
      <input
        className="input_page"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)} type="submit">{t('input.label')}</button>
    </form>
  );
};

export default Input;
