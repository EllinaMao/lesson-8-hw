import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="home-page page-container">
      <h1>Game registration!</h1>
      <p>Hi love! Welcome to the game registration.</p>
      <p>Lets create your profile step by step.</p>
      <Link to="/form-step-1" className="btn btn-primary">
        <button className="btn btn-primary">Start Registration</button>
      </Link>
    </section>
  );
};

export default HomePage;