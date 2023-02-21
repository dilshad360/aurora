import React from 'react'
import { ResultCardWrapper } from '../styles/ResultStyle'
import FirstMedal from '../assets/medals/first.png'
import SecondMedal from '../assets/medals/second.png'
import ThirdMedal from '../assets/medals/third.png'

function ResultCard({result, index}) {
  return (
    <ResultCardWrapper>  
        { result.fields.Place === "First" || result.fields.Place === "FirstGrp"  && <img src={FirstMedal} alt="firstmedal" />}
        { result.fields.Place === "Second" || result.fields.Place === "SecondGrp" && <img src={SecondMedal} alt="secondmedal" />}
        { result.fields.Place === "Thrid" || result.fields.Place === "ThirdGrp" && <img src={ThirdMedal} alt="thirdmedal" />}
        <div>
        <h2>{result.fields.Name}</h2>   
        <p>{result.fields.Department}&nbsp;&nbsp;{result.fields.Year} yr</p>
        </div>
    </ResultCardWrapper>
  )
}

export default ResultCard