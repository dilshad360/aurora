import styled from "styled-components";

export const ResultWrapper = styled.div`

  padding: 0 18rem 0 18rem;
  height: 90vh;

  input{
    padding: .5rem 1rem .5rem 1rem;
    border: 1px solid #999;
    font-size: 16px;
    color: #67250f;
    border-radius: 5px;
    width: 50%;
    margin-bottom: .1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }

  p{
    margin: .5rem 0 .5rem 0;
  }

  p i{
    opacity: 50%;
    font-size: .8rem;
  }


  @media (max-width: 1024px) {
        padding: 0;
    }
    @media (max-width: 768px) {
        padding: 0;
        input{
          width: 80%;
        }
    }
`;

export const ResultCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    margin: 1rem 1rem 1rem 1rem;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    h2{
      font-size: 2rem;
      margin: 0;
    }


    img{
      position: absolute;
      width: 10%;
      left: 2%;
      top: 8%;
    }

    p{
      font-size: 0.8rem;
      margin: .3rem 0 0 0;
    }

    @media (max-width: 768px) {
    margin: 1rem 1rem 1rem 1rem;
    h2{
      font-size: 1.2rem;
    }
    img{
      width: 22%;
    }
    }
`;

export const SearchAutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  overflow-y: scroll;
  

  ::-webkit-scrollbar{
    display: none;
  }

  

  button{
    padding: .5rem 1rem .5rem 1rem;
    border: 1px solid #e7e7e7;
    background: white;
    color: #67250f;
    font-size: 1rem;
    border-radius: 5px;
    width: 54%;
    margin-bottom: .2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    button{
      width: 86%;
    }
  }
`;
