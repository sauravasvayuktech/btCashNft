import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const onSubmitHandle = (e) => {
        e.preventDefault();
    }
    const navigate = useNavigate(); 
    const handleLogin = () => {
      navigate('/user-dashboard'); 
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
              <div className="">
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
              <div></div>
              <button className="mb-4 mt-2 authText formSubmitBtn border-0" onClick={handleLogin}>
                Login 
              </button>
              <p>
                Don't have an account?{" "}
                <span style={{ color: "#e9a031" }}>
                  <Link to="/">Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
