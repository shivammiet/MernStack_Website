import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container mt-5">
          <h2 className="home-header">Welcome to Our MERN STACK Website</h2>
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non turpis vel enim aliquet
            faucibus. Mauris eu lacus vel nunc iaculis ullamcorper. Nullam sit amet eros at arcu
            sodales fringilla.
          </p>
          <div className="home-buttons">
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
