//1 orange nav bar, light orange letters
//2 three line icon opens pop-up menu
//3 link for 1: Home 2: favorite restaurant  3: add dish 4: favorites 5: login
// assigned to Jeffrey

import React, { useState } from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";

import {Header,DropDown} from '../styles/NavStyles'



function Nav() {
  function toggle() {

    document.getElementById("menu").classList.toggle("hidden");
  }
  return (
    <Header>
      <div>
        <svg
          width="70"
          height="30"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.52632 1.42105C8.52632 1.29542 8.47641 1.17494 8.38758 1.08611C8.29874 0.997274 8.17826 0.947368 8.05263 0.947368C7.927 0.947368 7.80652 0.997274 7.71769 1.08611C7.62885 1.17494 7.57895 1.29542 7.57895 1.42105V2.86768C6.53666 2.98422 5.5739 3.48086 4.87479 4.26264C4.17568 5.04443 3.78927 6.05648 3.78947 7.10526V12.708L2.28695 14.2105H13.8183L12.3158 12.708V7.10526C12.316 6.05648 11.9296 5.04443 11.2305 4.26264C10.5314 3.48086 9.5686 2.98422 8.52632 2.86768V1.42105ZM8.05263 0C8.42952 0 8.79097 0.149718 9.05747 0.416217C9.32397 0.682716 9.47368 1.04417 9.47368 1.42105V2.09084C11.6612 2.70947 13.2632 4.71979 13.2632 7.10526V12.3158L16.1053 15.1579H0L2.84211 12.3158V7.10526C2.84211 5.97095 3.21213 4.8676 3.89602 3.96263C4.57992 3.05767 5.54035 2.4005 6.63158 2.09084V1.42105C6.63158 1.04417 6.7813 0.682716 7.0478 0.416217C7.31429 0.149718 7.67574 0 8.05263 0ZM8.05263 18C7.50664 18.0001 6.97737 17.8116 6.55441 17.4663C6.13145 17.121 5.84078 16.6402 5.73158 16.1053H6.7121C6.80975 16.3828 6.99115 16.6233 7.23127 16.7933C7.47139 16.9634 7.75838 17.0547 8.05263 17.0547C8.34688 17.0547 8.63387 16.9634 8.87399 16.7933C9.11411 16.6233 9.29551 16.3828 9.39316 16.1053H10.3737C10.2645 16.6402 9.97381 17.121 9.55085 17.4663C9.12789 17.8116 8.59862 18.0001 8.05263 18Z"
            fill="#E8964A"
          />
        </svg>

        <svg
          width="30"
          height="30"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 0H11C11.7956 0 12.5587 0.316071 13.1213 0.87868C13.6839 1.44129 14 2.20435 14 3V18L7 15L0 18V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V16.49L7 13.942L13 16.489V3C13 2.46957 12.7893 1.96086 12.4142 1.58579C12.0391 1.21071 11.5304 1 11 1H3Z"
            fill="#E8964A"
          />
        </svg>
      </div>

      <div id="menu">
        
        <DropDown>
          <Link>Home</Link>
          <Link>Favorite Dish</Link>
          <Link>Add Dish</Link>
          <Link>Favorites</Link>
          <Link>Login</Link>
        </DropDown>
 
      </div>

      <h1>FoodieFun</h1>
      <svg
        onClick={() => toggle()}
        width="50"
        height="50"
        viewBox="0 0 26 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 2.31429V0.771431H26V2.31429H0.5ZM26 8.48572V10.0286H0.5V8.48572H26ZM0.5 16.2H26V17.7429H0.5V16.2Z"
          fill="#ECB847"
        />
      </svg>
    
    </Header>
  );
}

export default Nav;


