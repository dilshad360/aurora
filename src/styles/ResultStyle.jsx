import styled from "styled-components";

export const ResultWrapper = styled.div`

  padding: 0 18rem 0 18rem;

  input{
    padding: .5rem 1rem .5rem 1rem;
    border: 1px solid #999;
    font-size: 16px;
    color: #67250f;
    border-radius: 5px;
    width: 50%;
    margin-bottom: .1rem;
  }

  @media (max-width: 1024px) {
        padding: 0;
    }
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const ResultCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    margin: 1rem 1rem 3.5rem 1rem;
    padding: 1rem 1rem 1rem 10rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

    >* {
      flex: 1;
    }

    img{
      position: absolute;
      width: 14%;
      left: 2%;
      top: 8%;
    }

    @media (max-width: 768px) {
    padding: 1rem 1rem 1rem 5rem;
    margin: .5rem 1rem .5rem 1rem;
    h2{
      font-size: 1rem;
    }
    img{
      width: 18%;
    }
    }
`;

export const SearchAutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  overflow: auto;

  button{
    padding: .5rem 1rem .5rem 1rem;
    border: 1px solid #e7e7e7;
    background: white;
    font-size: 1rem;
    border-radius: 5px;
    width: 54%;
    margin-bottom: .2rem;
    cursor: pointer;
  }
`;
