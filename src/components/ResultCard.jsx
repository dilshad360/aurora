import React from 'react'
import { ResultCardWrapper } from '../styles/ResultStyle'
import FirstMedal from '../assets/medals/first.png'
import SecondMedal from '../assets/medals/second.png'
import ThirdMedal from '../assets/medals/third.png'

function ResultCard({result, index}) {
  return (
    <ResultCardWrapper>  
        { index === 0 && <img src={FirstMedal} alt="firstmedal" />}
        { index === 1 && <img src={SecondMedal} alt="secondmedal" />}
        { index === 2 && <img src={ThirdMedal} alt="thirdmedal" />}
        <h2>{result.fields.Name}</h2>   
        <p>{result.fields.Department}</p>
        <p>{result.fields.Year} yr</p>
    </ResultCardWrapper>
  )
}

export default ResultCard