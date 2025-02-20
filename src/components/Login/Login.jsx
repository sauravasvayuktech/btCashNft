import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/user-dashboard");
  };
  return (
    <>
      <main>
        <section className="loginWrapper">
          <div className="loginform">
            <h4 className="text-center mb-0">Login Form</h4>
            <form action="" className="pt-4" onClick={onSubmitHandle}>
              <div className="inputArea">
                <label htmlFor="">User Name / Id</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-100 px-3 py-2 rounded"
                />
              </div>
              <div className="passwordAreaInput">
                <label htmlFor="password">Password</label>
                <br />
                <div className="inputArea">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter Your Password"
                    className="px-3 py-2 rounded w-100 pe-5"
                  />
                  <button
                    type="button"
                    className="eyeIcons"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button
                className="mb-4 mt-2 authText formSubmitBtn border-0"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <p  className="mb-1 mb-lg-0">
                  Don't have an account?{" "}
                  <span style={{ color: "#e9a031" }}>
                    <Link to="/signup">Sign up</Link>
                  </span>
                </p>
                <div className="resetUrl">
                  <Link to="/reset" style={{ color: "#e9a031" }}>Forgot Password</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
