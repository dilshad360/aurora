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
            <p><b>{index + 1}</b></p>
            <p><b>{individual.fields.Name}</b><span>{individual.fields.Department}</span><span>{individual.fields.Year} yr</span></p>
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