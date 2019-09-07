import React from "react";
import "./CreateForm.css";
export default function CreateForm(props) {
  return (
    <form className="CreateForm" onSubmit={props.onSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
          placeholder="Title"
        />
      </label>
      <label>
        URL
        <input
          type="text"
          name="url"
          value={props.values.url}
          onChange={props.onChange}
          placeholder="URL"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
