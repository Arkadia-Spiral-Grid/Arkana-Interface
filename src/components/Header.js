import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/assets/logo.png" alt="Arkadia Logo" />
      </div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#donation">Support</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
    </header>
  );
}

export default Header;
