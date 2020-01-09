import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background: #C45228;
  height: 100px;
  justify-content: space-around;
  align-items:center;

  #menu {
    position: absolute;
    top: 99px;
    right: 0px;
    background-color:  #C45228;
    margin: 0;
    padding: 0;
    /* display: none; */
  
    @media (max-width: 800px) {
      top: 84px;
    }

    @media (max-width: 500px) {
      top: 69px;
    }
  }
  
   .hidden {
     display: none;
   }



  h1 {
    font-size: 5rem;
     color: #ECB847;
  }

  @media (max-width: 800px) {
    height: 85px;

    h1 {
        font-size: 4rem;
    }
  }

  @media (max-width: 500px) {
      height: 70px;

    h1 {
        font-size: 3rem;
    }
  }


`;

export const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 15px;
  // border-left: solid black 2px;
  // border-bottom: solid black 2px;

  a {
    text-decoration: none;
    color: black;
  }
`;

// export const DropDownList = styled.div`
//   position: absolute;
//   top: 100px;
//   right: 270px;
//   background-color: #C45228;
// `;