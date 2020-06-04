import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './styles.css';

const Alert = () => {
  return (
    <div className="success">
        <span><FiCheckCircle /></span>
        <h1>Cadastro Realizado!</h1>
    </div>
  );
}

export default Alert;
