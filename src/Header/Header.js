import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
        <Link to="/">
          <img src="/PngItem_12080.png" className="header__logo" />
        </Link>

        <div className="header__search">
          <input className="header__searchinput" typr="text" />
          <SearchIcon className="header__searchicon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionlineone">Hello Guest</span>
            <span className="header__optionlinetwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>

          <Link to='/checkout'>
            <div className="header__optionbasket">
              <ShoppingBasket />
              <span className="header__optionlinetwo header__basketcount">
                0
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
