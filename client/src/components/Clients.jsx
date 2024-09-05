import React from "react";

const Clients = ({ logo, link }) => {
  return (
    <li className="clients-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Client" />
      </a>
    </li>
  );
};

export default Clients;
