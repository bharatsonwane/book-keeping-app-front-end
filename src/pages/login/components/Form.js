import react, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginAction } from "src/thunks/auth";
import Logo from "../../../assets/images/Eteva_Logo.svg";
import { Spinner } from "src/components/Spinner";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reducerStateLogin = useSelector((state) => state.auth);
  const formRef = useRef();

  useEffect(() => {}, []);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const state = useSelector((state) => state);
  // const userId = state.login.userId;

  const loginHandler = async (e) => {
    if (formRef.current.checkValidity()) {
      try {
        await dispatch(userLoginAction({ email, password })).unwrap();
        navigate("/app");
      } catch (error) {
        console.info("error", error);
      }
    }
    formRef.current && formRef.current.classList.add("was-validated");
  };

  return (
    <>
      <div>
        <div className="ss-dash bg-white row h-100 w-100 ">
          {reducerStateLogin.loading ? <Spinner /> : null}

          {/* <Spinner /> */}
          {/* 
          <div className="col-sm-4 p-3  text-black bg-primary ">
            <div className="top " >
              <a className="navbar-brand " >
                <img className="image" src={Logo} alt="Eteva" />
              </a>
            </div>
          </div> */}

          {/* pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" */}
          <div className="col-sm-8 mt-5 max-auto bg-white text-black align-items-center">
            <div className="login ms-3">
              <h4>Log In</h4>
            </div>
            <form ref={formRef} className="row g-3 needs-validation" noValidate>
              <div className="container-sm w-75">
                <div className="mb-3 mt-3  text-start offset-sm-3">
                  <label htmlFor="email">
                    Email ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control custom-field-login"
                    id="email"
                    placeholder="e.g. user@gmail.com"
                    value={email}
                    onChange={emailHandler}
                    required
                  />
                  <div className="invalid-feedback">Please Enter Email Id.</div>
                </div>
                <div className="mb-3 text-start offset-sm-3 ">
                  <label htmlFor="pwd">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control custom-field-login"
                    id="password"
                    placeholder="e.g. Password@123"
                    value={password}
                    onChange={passwordHandler}
                    required
                  />
                  <div className="invalid-feedback">Please Enter Password.</div>
                </div>
                <div className="form-check mb-3 ms-5">
                  <label className="form-check-label ">Forgot Password?</label>
                </div>
                <button
                  type="button"
                  className="loginbtn btn btn-primary btn-block text-white ms-5 w-50 h-20"
                  onClick={loginHandler}
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
