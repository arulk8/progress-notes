import React from 'react';

function Header() {
  return (
    <header className="main-header flex-row flex-aic py-8">
      <div className="header__left--container flex-row flex-aic margin-auto--r">
        <h2 className="logo__name font-bold">
          <a className="no-underline c-white" href="./index.html">
            Home
          </a>
        </h2>
      </div>

      <div className="header__center--container">
        <form action="">
          <div className="search__container">
            <span className="header__search--icon fas fa-search" />
            <input
              className="header__search--bar"
              placeholder="Search"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="header__right--container margin-auto--l">
        <nav className="main-nav">
          <ul className="main-nav__links flex-row flex-aic list-style-none">
            <li className="main-nav__link px-5 font-medium">
              <a className="no-underline c-white" href="./auth/index.html">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
