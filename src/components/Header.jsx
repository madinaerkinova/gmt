import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-top hidden py-1 text-gray-600 md:block">
        <div className="header-top__container mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
          <div className="header-top__links flex items-center gap-3 text-xs xl:text-sm">
            <NavLink to="/about" className="header-top__link">О компании</NavLink>
            <NavLink to="/dostavka" className="header-top__link">Доставка</NavLink>
            <NavLink to="/oplata" className="header-top__link">Оплата</NavLink>
            <NavLink to="/garantii" className="header-top__link">Гарантии</NavLink>
            <NavLink to="/blog" className="header-top__link">Блог</NavLink>
          </div>
          <div className="header-top__contact flex items-center gap-6 text-xs xl:text-sm">
            <a href="mailto:info@mail.ru">info@mail.ru</a>
            <address className="not-italic">
              <span>г. Москва, ул. Московская, д. 35</span>
            </address>
          </div>
        </div>
      </div>
      <div className="header-divider hidden h-[1px] w-full bg-gray-300 sm:block"></div>
      <div className="header-main mx-auto flex w-full max-w-[1300px] items-center justify-between mt-5 gap-5 px-5">
        <div className="header-main__logo-search flex gap-10">
          <img src={Logo} alt="Logo" className="header-main__logo" />
          <div className="header-main__search flex items-center bg-gray-200 rounded-full pr-5 text-sm xl:text-base w-96">
            {/* Search input and select here */}
          </div>
          <p className="header-main__working-hours hidden text-sm text-gray-600 xl:block">
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
        <div className="header-main__actions flex gap-4">
          <NavLink to="/login" className="header-main__btn-login flex-col items-center text-gray-600 hover:text-green-700 flex">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for login icon */}
            </svg>
            <span className="mt-1 hidden lg:block">Войти</span>
          </NavLink>
          <NavLink to="/favorite" className="header-main__btn-favorite flex flex-col items-center text-gray-600 hover:text-green-700">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for favorite icon */}
            </svg>
            <span className="mt-1 hidden lg:block">Избранное</span>
          </NavLink>
          <NavLink to="/cart" className="header-main__btn-cart flex flex-col items-center text-gray-600 hover:text-green-700">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for cart icon */}
            </svg>
            <span className="mt-1 hidden lg:block">Корзина</span>
          </NavLink>
        </div>
      </div>
      <style jsx>{`
        /* Your CSS styles here */
      `}</style>
    </header>
  );
};

export default Header;
