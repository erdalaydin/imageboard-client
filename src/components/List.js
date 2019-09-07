import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import "./List.css";

export default function List(props) {
  const images = props.images.map(image => (
    <div class="uploaded-div" key={image.url}>
      <h3>{image.title}</h3>
      <img class="uploaded-image" src={image.url} alt={image.title} />
    </div>
  ));

  const form = props.user ? <CreateFormContainer /> : <LoginFormContainer />;

  return (
    <div className="uploaded-list">
      {form}
      {images}
    </div>
  );
}
