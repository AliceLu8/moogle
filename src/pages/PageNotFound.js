import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className="page page-not-found">
      <section className="section-wrapper">
          <div className="page-info">
              <h1>Oh No!!! 404.... Page Not Found</h1>
          </div>
          <div className="about-text">
              <p>Go to <NavLink to='/' className="navlink">Home</NavLink> page.</p>
          </div>
      </section>
    </main>
  )
}

export default PageNotFound;