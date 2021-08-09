import React from "react";

const NavColumn = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavColumn;
