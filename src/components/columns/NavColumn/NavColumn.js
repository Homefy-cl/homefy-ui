import React from "react";

// Renders Children passed items as a list.
// This was created to pass a <Link to/> component
// in a efficient and clean way.

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
