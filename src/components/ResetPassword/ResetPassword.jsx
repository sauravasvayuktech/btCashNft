import { Link } from "react-router";

const ResetPassword = () => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
}
  return (
    <>
      <main>
        <section className="loginWrapper resetWrapper">
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
              <button
                className="mb-4 mt-2 authText formSubmitBtn border-0"
              >
                Forgot Password
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResetPassword;
