import { Routes, Route, useParams } from "react-router-dom";

const Welcome = () => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="user-login" element={<p>This is a nested Route</p>} />
      </Routes>
    </>
  );
};

export default Welcome;
