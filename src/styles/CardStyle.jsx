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
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
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

export const IndividualCardStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    margin: 1rem;
    padding: 2rem 4rem 2rem 4rem;
    border-radius: 1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
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
    h4{
        margin-left: 1rem;
        background: #67250f43;
        font-size: .8rem;
        color: #fef9e4;
        padding: 0.2rem .6rem 0.2rem .6rem;
        border-radius: 3rem;
    }
    img{
        position: absolute;
        right: 0;
        top: -30%;
        width: 90px;
        margin: 0 1rem 0 1rem;
    }
    @media (max-width: 768px) {
    padding: 1rem 1rem 1rem 1rem;
    h1{
        font-size: 1.2rem;
    }
    h2{
        font-size: 0.7rem;
    }
    h3{       
        font-size: 5rem;
        left: 2rem;
    }
    h4{
        font-size: .6rem;
        padding: 0.1rem .3rem 0.1rem .3rem;
    }
    img{
        width: 50px;
    }
}
`