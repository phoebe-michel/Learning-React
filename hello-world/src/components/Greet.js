import React from "react";

const Greet = ({name, characterName, children}) => {
  return (
    <div>
      <h1>
        Hello, {name} a.k.a {characterName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;