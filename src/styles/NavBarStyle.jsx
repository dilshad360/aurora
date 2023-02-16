import styled from "styled-components";

export const HeaderWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 1rem 0 0 0;
 img{
    width: 140px;
 }
 nav{
   margin-top: 3rem;
   display: flex;
   justify-content: center;
 }
 a{
   font-size: 1.4rem;
   margin: 0 2rem 0 2rem;
   color: #67250f;
   text-decoration: none;
   font-weight: 300;
   &:hover {
      font-weight: 500;
    }
 }

`