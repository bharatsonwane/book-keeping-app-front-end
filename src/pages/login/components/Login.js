import axios from "axios";
import React, { useState } from "react";
import MainApp from "../../../containers/mainapp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (evant) => {
    setPassword(evant.target.value);
  };
  const submitHandler = () => {
    axios.post("");
  };

  return (
    <>
      <div className="main">
        {/* <div className='left-side'>
      <h1>Logo</h1>
      <h3>Title</h3>
      <p>some text</p>
    </div> */}

        <div className="right-side">
          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Email"
              onChange={passwordHandler}
              value={password}
            />
          </div>
          <div>
            <button type="button" onSubmit={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
