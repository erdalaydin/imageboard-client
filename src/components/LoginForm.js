import React from "react";
import "./LoginForm.css";
export default function LoginForm(props) {
  return (
    <form className="LoginForm" onSubmit={props.onSubmit}>
      <label>
        email
        <input
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
          placeholder="email"
        />
      </label>
      <label>
        password
        <input
          type="text"
          name="password"
          value={props.values.password}
          onChange={props.onChange}
          placeholder="password"
        />
      </label>
      <button>Login</button>
    </form>
  );
}
