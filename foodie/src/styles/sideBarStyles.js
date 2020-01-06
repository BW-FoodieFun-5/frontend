import styled from 'styled-components'

export const StyledSideBar = styled.div`
        height: 100vh;
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: orangered;\
        div{
            height: 100vh;
        width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        a{
            text-decoration: none;
            font-size: 3rem;
            color: orange;
            &:hover{
                color: black
            }
        }
        
        
    
`