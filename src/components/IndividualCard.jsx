import React from 'react'
import { IndividualCardStyle } from '../styles/CardStyle'
import Star from "../assets/star.png";

function IndividualCard({ individual, index }) {
  return (
    <IndividualCardStyle>
        <h3>{index + 1}</h3>
      <div>
        <h1>{individual.fields.Name}</h1>  
        <h2>{individual.fields.Department}</h2>
        <h4>{individual.fields.Year} year</h4>
      </div>
      {index === 0 && <img src={Star} alt="STAR" />}
      <h1>
        {individual.fields.Points}
        <span> pts</span>
      </h1>
    </IndividualCardStyle>
  )
}

export default IndividualCard