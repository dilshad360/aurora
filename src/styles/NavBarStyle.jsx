import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 3rem 18rem 0 18rem;
  margin-bottom: 3rem;

  img {
    width: 16%;
  }
  a {
    font-size: 1.4rem;
    margin: 0 2rem 0 2rem;
    color: #592877;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 1024px) {
    padding: 2rem 2rem 0 2rem;
    font-size: 1rem;
    margin: 0 1rem 0 1rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem 0 1rem;
    img {
      width: 24%;
    }
    a {
      font-size: 1rem;
      margin: 0 1rem 0 1rem;
    }
  }
`;
