import React from 'react';
import LOGO from '../../assets/img/logo.png';

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={LOGO} alt="Trillo" className="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Seach hotels"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref="src/assets/img/sprite.svg#magnifying-glass" />
            </svg>
          </button>
        </form>
      </header>

      <div className="content">
        <nav className="sidebar">NAVIGATION</nav>
        <main className="hotel-view">HOTEL VIEW</main>
      </div>
    </div>
  );
};

export default Layout;
