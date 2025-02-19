import { useEffect, useState } from "react";
import { FormCheck, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // Function to generate a new single-digit CAPTCHA
  const generateCaptcha = () => Math.floor(Math.random() * 10); // Generates a single-digit (0-9)

  useEffect(() => {
    setCaptcha(generateCaptcha()); // Generate CAPTCHA on component mount
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setUserInput(value);
  };

  const isCorrect = userInput !== "" && parseInt(userInput) === captcha * 2;

  return (
    <>
      <main>
        <section className="loginWrapper">
          <div className="loginform signupForm">
            <h4 className="text-center mb-0">Signup Form</h4>
            <form action="" className="pt-4" onClick={onSubmitHandle}>
                <Row>
              <div className="inputArea col-lg-6">
                <label htmlFor="">User Name / Id</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-100 px-3 py-2 rounded"
                />
              </div>
              <div className="passwordAreaInput col-lg-6">
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
              <div className="passwordAreaInput col-lg-6">
                <label htmlFor="password">Confirm Password</label>
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
              <div className="inputArea col-lg-6">
                <label htmlFor="">Referral Code</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Referral Code"
                  className="w-100 px-3 py-2 rounded"
                />
              </div>
              <div className="inputArea col-lg-6">
                <label>
                  Solve CAPTCHA:{" "}
                  <strong>
                    {captcha} + {captcha}
                  </strong>
                </label>
                <br />
                <input
                  type="text"
                  value={userInput}
                  onChange={handleChange}
                  placeholder="Enter CAPTCHA"
                  className="w-100 px-3 py-2 rounded"
                />
                {userInput && (
                  <p className="mb-0 pt-1" style={{ color: isCorrect ? "green" : "red" }}>
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                  </p>
                )}
              </div>
              </Row>
              <div className="d-flex align-items-top gap-3 mb-3">
                <FormCheck className="" checked/> <p className="mb-0">I confirm I am over 18 years old and I have read
                terms of service.</p>
              </div>
              <button className="mb-4 mt-2 authText formSubmitBtn border-0">
                Create an Account
              </button>
              <p>
              Already have an account? {" "}
                <span style={{ color: "#e9a031" }}>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
