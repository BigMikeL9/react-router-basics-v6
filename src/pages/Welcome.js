import { Link, Outlet, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  // -- Redirect user to new page
  const redirectButtonHandler = () => {
    navigate("/products", { replace: true });
  };

  // -- go back
  const backButtonHandler = () => {
    navigate(-1);
  };

  // -- go forward twice
  const twiceForwardButtonHandler = () => {
    navigate(2);
  };

  return (
    <>
      <h1>The Welcome Page</h1>
      <Link to="user-login">Login</Link>
      <Outlet />

      {/* 👇 Imperative navigation with react-router-v6 👇 */}
      <br />
      <br />
      <br />
      <h1>👇 Imperative Navigation using 'useNavigate' hook 👇</h1>
      <div>
        <button type="button" onClick={redirectButtonHandler}>
          Redirect to different Route!
        </button>
      </div>

      <div>
        <button type="button" onClick={backButtonHandler}>
          Go Back
        </button>
      </div>

      <div>
        <button type="button" onClick={twiceForwardButtonHandler}>
          Go Forward TWICE
        </button>
      </div>
    </>
  );
};

export default Welcome;
