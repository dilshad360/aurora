import React from 'react'
import { IndividualCardWrapper, IndividualRecord } from '../styles/CardStyle'
import Loader from './Loader'

function IndividualCard({individuals}) {
  return (
    <IndividualCardWrapper>
        <h2>Individual</h2>
        { individuals.length ? (<>
        { individuals.map((individual ,index) => (   
            <IndividualRecord key={individual.id}>
            <p>{index + 1}</p>
            <p><b>{individual.fields.Name}</b></p>
            <p>{individual.fields.Department}</p>
            <p>{individual.fields.Year} yr</p>
            <p><b>{individual.fields.Points} pts</b></p>
            </IndividualRecord>
          ))}
          </>
        ):(<Loader/>)
        }
    </IndividualCardWrapper>
  )
}

export default IndividualCard