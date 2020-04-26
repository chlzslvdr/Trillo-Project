import React from 'react';
import LOGO from '../../assets/img/logo.png';
import USER from '../../assets/img/user.png';
import USER1 from '../../assets/img/user-1.png';
import USER2 from '../../assets/img/user-2.png';
import USER3 from '../../assets/img/user-3.png';
import USER4 from '../../assets/img/user-4.png';
import USER5 from '../../assets/img/user-5.png';
import USER6 from '../../assets/img/user-6.png';
import HOTEL1 from '../../assets/img/hotel-1.jpg';
import HOTEL2 from '../../assets/img/hotel-2.jpg';
import HOTEL3 from '../../assets/img/hotel-3.jpg';

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
            <svg class="search__icon">
              <use xlinkHref="/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg class="user-nav__icon">
              <use xlinkHref="/sprite.svg#icon-bookmark"></use>
            </svg>
            <span className="user-nav__notification">7</span>
          </div>

          <div className="user-nav__icon-box">
            <svg class="user-nav__icon">
              <use xlinkHref="/sprite.svg#icon-chat"></use>
            </svg>
            <span className="user-nav__notification">12</span>
          </div>

          <div className="user-nav__user">
            <img src={USER} alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Ji Eun</span>
          </div>
        </nav>
      </header>

      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <svg class="side-nav__icon">
                  <use xlinkHref="/sprite.svg#icon-home"></use>
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg class="side-nav__icon">
                  <use xlinkHref="/sprite.svg#icon-aircraft-take-off"></use>
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg class="side-nav__icon">
                  <use xlinkHref="/sprite.svg#icon-key"></use>
                </svg>
                <span>Car Rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg class="side-nav__icon">
                  <use xlinkHref="/sprite.svg#icon-map"></use>
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2020 by trillo. All rights reserved.
          </div>
        </nav>

        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img src={HOTEL1} alt="Hotel 1" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={HOTEL2} alt="Hotel 2" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={HOTEL3} alt="Hotel 3" className="gallery__photo" />
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview__heading">Hotel Del Luna</h1>

            <div className="overview__stars">
              <svg class="overview__icon-star">
                <use xlinkHref="/sprite.svg#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                <use xlinkHref="/sprite.svg#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                <use xlinkHref="/sprite.svg#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                <use xlinkHref="/sprite.svg#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                <use xlinkHref="/sprite.svg#icon-star"></use>
              </svg>
            </div>

            <div className="overview__location">
              <svg class="overview__icon-location">
                <use xlinkHref="/sprite.svg#icon-location-pin"></use>
              </svg>
              <button className="btn-inline">Seoul, South Korea</button>
            </div>

            <div className="overview__rating">
              <div className="overview__rating-average">9.2</div>
              <div className="overview__rating-count">720 votes</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lobortis porta magna nullam odio tempor bibendum penatibus
                sociis dui, torquent condimentum fermentum felis habitant
                facilisis curabitur interdum ullamcorper ultricies convallis.
              </p>
              <p className="paragraph">
                Nulla habitasse turpis diam lacinia tincidunt, potenti sodales
                gravida pharetra vivamus,mollis pharetra nullam ligula.
              </p>

              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>

              <div className="recommend">
                <p className="recommend__count">
                  Seo Joon and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                  <img
                    src={USER4}
                    alt="Friend 1"
                    className="recommend__photo"
                  />
                  <img
                    src={USER5}
                    alt="Friend 2"
                    className="recommend__photo"
                  />
                  <img
                    src={USER6}
                    alt="Friend 3"
                    className="recommend__photo"
                  />
                  <img
                    src={USER3}
                    alt="Friend 4"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>

            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review__text">
                  Leo consequat faucibus volutpat purus ligula dictum blandit
                  auctor felis primis parturient, vivamus pretium orci diam
                  lacinia!!
                </blockquote>
                <figcaption className="review__user">
                  <img src={USER1} alt="User 1" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Lee Jong Suk</p>
                    <p className="review__user-date">Aug 21st, 2019</p>
                  </div>
                  <div className="review__rating">8.5</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="review__text">
                  Habitasse sollicitudin duis natoque malesuada tincidunt
                  adipisicing congue fringilla, feugiat consequat.
                </blockquote>
                <figcaption className="review__user">
                  <img src={USER2} alt="User 2" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Nam Joo Hyuk</p>
                    <p className="review__user-date">Feb 14th, 2020</p>
                  </div>
                  <div className="review__rating">6.7</div>
                </figcaption>
              </figure>

              <button className="btn-inline">
                Show all
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
