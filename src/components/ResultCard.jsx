import React from 'react'
import { ResultCardWrapper } from '../styles/ResultStyle'
import FirstMedal from '../assets/medals/first.png'
import SecondMedal from '../assets/medals/second.png'
import ThirdMedal from '../assets/medals/third.png'

function ResultCard({result, index}) {
  return (
    <ResultCardWrapper>  
        { result.fields.Place === "First" && <img src={FirstMedal} alt="firstmedal" />}
        { result.fields.Place === "Second" && <img src={SecondMedal} alt="secondmedal" />}
        { result.fields.Place === "Thrid" && <img src={ThirdMedal} alt="thirdmedal" />}
        <h2>{result.fields.Name}</h2>   
        <p>{result.fields.Department}</p>
        <p>{result.fields.Year} yr</p>
    </ResultCardWrapper>
  )
}

export default ResultCard