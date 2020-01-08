//1 orange nav bar, light orange letters
//2 three line icon opens pop-up menu
//3 link for 1: Home 2: favorite restaurant  3: add dish 4: favorites 5: login
// assigned to Jeffrey

import styled from "styled-components";



export const Header = styled.header`
  display:flex
  background: #C45228
  height: 20vh
  justify-content: space-around
  align-items:center
  h1{
    font-size: 5rem
     color: #ECB847 
  }

  @media (max-width: 500px){
      height:10vh
   h1{
       font-size:2rem
   }
  }
`;
export const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 15px;
  border-left: solid black 2px;
  border-bottom: solid black 2px;

  a{
    text-decoration:none;
    color:black;
  }
`

// export const DropDownList = styled.div`
// position: absolute;
//   top:100px;
//   right:270px;
//   background-color:  #C45228;


// `