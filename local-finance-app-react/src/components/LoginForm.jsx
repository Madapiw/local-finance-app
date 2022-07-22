import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom"

function LoginForm({ Login, error }) {
  let [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="row d-flex justify-content-center">
      <form className="col-md-3 mt-5" onSubmit={submitHandler}>
        <div className="form-inner">
          <h2 className="display-3 font-weight-bold">Login</h2>
          <div id="form-group" className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jan Kowalski"
              className="form-control"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            ></input>
          </div>

          <div className="mb-3" id="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="kowalski@poczta.pl"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            ></input>
          </div>

          <div className="mb-3" id="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**************"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>
          {error !== "" ? (
            <div
              className="rounded mb-3 mt-2 p-2 bg-danger text-center text-light"
              id="error"
            >
              {error}
            </div>
          ) : (
            ""
          )}
          <button type="submit" className="btn btn-primary btn-center">
            Login
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

export default LoginForm;
