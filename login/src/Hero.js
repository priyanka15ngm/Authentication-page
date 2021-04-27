import React from "react";

const Hero = (handleLogout) => {
  return (
    <section className="hero">
      <nav>
        <h2>Sign in page with back-end build by priyanka</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
