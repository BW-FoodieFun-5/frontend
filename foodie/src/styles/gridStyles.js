import styled from 'styled-components';

// export const StyledGrid = styled.div`
//     display: flex;
//     width: 100%;
//     justify-content: space-evenly;
//     flex-wrap: wrap;

//     a {
//         color: orangered;
//         width: 25%;
//     } 
// `;

export const StyledGrid = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #181212;
    margin-bottom: 8vh;

    h1 {
        margin-left: 20px;
    }

    h2 {
        margin-left: 20px;
    }

    a {
        background-color: #593333;
        color: orangered;
        margin-bottom: 20px;
        padding: 0;
        // width: 25%;   
    } 
`;