import styled from "styled-components"


export const TeamCard = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    margin: 1rem;
    padding: 2rem 4rem 2rem 4rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    color: ${props => props.inputColor || "palevioletred"};
    h3{
        position: absolute;
        left: 5rem;
        font-size: 8rem;
        opacity: 15%;
        flex-grow: 1;
    }
    h2{
        margin-left: 1rem;
        font-weight: 300;
        font-size: 1.2rem;
        opacity: 40%;
    }
    div{
        display: flex;
        align-items: center;
        flex-grow: 1;
    }
    h1 span{
        font-size: 1rem;
        opacity: 30%;
    }
    img{
        position: absolute;
        right: 0;
        top: -30%;
        width: 90px;
        margin: 0 1rem 0 1rem;
    }

    @media (max-width: 768px) {
    padding: 1rem 3rem 1rem 3rem;
    h1{
        font-size: 1.2rem;
    }
    h2{
        font-size: 0.8rem;
    }
        h3{       
        font-size: 5rem;
        left: 3rem;
    }
    img{
        width: 50px;
    }
  }
`


export const IndividualCardWrapper = styled.div`
    background: white;
    padding: .6rem 0 2rem 0;
    border-radius: 1rem;
    margin: 3rem 1rem 3rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    h2{
        font-size: 2rem;
    }
`
export const IndividualRecord = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: solid #67250f11 .1rem;
        margin: .6rem 1rem .6rem 1rem;
        border-radius: 1rem;
    p{
        flex: 1;
        font-size: 1.2rem;
    }
    p span{
        display: block;
        color: #67250fa4;
        margin-top: .2rem;
        font-size: 0.8rem;
    }
`
