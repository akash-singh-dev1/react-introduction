import React from "react";

const CoreConcept = (props) => {
  console.log(`CoreConcept component is rendered for the ${props.title}`);
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};
export default CoreConcept;
