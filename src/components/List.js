import React from "react";
import CreateFormContainer from "./CreateFormContainer";

export default function List(props) {
  console.log(props);
  return (
    <div>
      {props.images.map(image => (
        <div className="image" key={image.url}>
          <h3>{image.title}</h3>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
      <CreateFormContainer />
    </div>
  );
}
