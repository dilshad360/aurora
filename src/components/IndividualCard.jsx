import React from 'react'
import { IndividualCardWrapper, IndividualRecord } from '../styles/CardStyle'
import Loader from './Loader'
import { motion } from 'framer-motion'

function IndividualCard({individuals}) {
  return (
    <IndividualCardWrapper>
        <h2>Individual</h2>
        { individuals.length ? (<>
        { individuals.map((individual ,index) => ( 
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}>
            <IndividualRecord>
            <p>{index + 1}</p>
            <p>{individual.fields.Name}</p>
            <p>{individual.fields.Department}</p>
            <p>{individual.fields.Year} yr</p>
            <p>{individual.fields.Points} pts</p>
            </IndividualRecord>
          </motion.div>
          ))}
          </>
        ):(<Loader></Loader>)
        }
    </IndividualCardWrapper>
  )
}

export default IndividualCard