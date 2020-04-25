import React from 'react';
import LOGO from '../../assets/img/logo.png';
import MagnifyingGlass from '../../Icons/MagnifyingGlass';
import Bookmark from '../../Icons/Bookmark';
import Chat from '../../Icons/Chat';
import Home from '../../Icons/Home';
import Airplane from '../../Icons/Airplane';
import Key from '../../Icons/Key';
import Map from '../../Icons/Map';
import USER from '../../assets/img/user.png';

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
            <div className="search__icon">
              <MagnifyingGlass />
            </div>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <span className="user-nav__icon">
              <Bookmark />
            </span>
            <span className="user-nav__notification">7</span>
          </div>

          <div className="user-nav__icon-box">
            <span className="user-nav__icon">
              <Chat />
            </span>
            <span className="user-nav__notification">12</span>
          </div>

          <div className="user-nav__user">
            <img src={USER} alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Ji Hyo</span>
          </div>
        </nav>
      </header>

      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <span className="side-nav__icon">
                  <Home />
                </span>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <span className="side-nav__icon">
                  <Airplane />
                </span>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <span className="side-nav__icon">
                  <Key />
                </span>
                <span>Car Rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <span className="side-nav__icon">
                  <Map />
                </span>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2020 by trillo. All rights reserved.
          </div>
        </nav>

        <main className="hotel-view">HOTEL VIEW</main>
      </div>
    </div>
  );
};

export default Layout;
