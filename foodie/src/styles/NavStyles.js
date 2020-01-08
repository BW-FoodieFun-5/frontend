//1 orange nav bar, light orange letters
//2 three line icon opens pop-up menu
//3 link for 1: Home 2: favorite restaurant  3: add dish 4: favorites 5: login
// assigned to Jeffrey

import styled from "styled-components";



const Header = styled.header`
  display:flex
  background: #C45228
  height: 20vh
  justify-content: space-around
  align-items:center

`;
const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  a{
    text-decoration:none;
    color:black;
  }
`

export default [Header,DropDown];