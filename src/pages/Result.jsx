import React from 'react'
import { useState } from 'react';
import Airtable from 'airtable';
import backendUrl from '../const/backendUrl';
import programs from '../const/programsList';
import { ResultWrapper ,SearchAutoWrapper } from '../styles/ResultStyle';
import { ListHeader } from '../styles/HomeStyle';
import ResultCard from '../components/ResultCard';
import { motion } from 'framer-motion';

function Result() {

    const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
        `${backendUrl.airtableBase}`
      );

    const [result, setResult] = useState([]);

    const [search, setSearch] = useState("");
    const [heading, setHeading] = useState("");


      const getPrograms = async (search) => {  
        base("Result")
         .select({ view: "Programs" , filterByFormula: `({Program} = '${search}')` })
         .eachPage(
           (records, fetchNextPage) => {
            setResult(records)
            setHeading(search)
             fetchNextPage();
           },
           function done(err) {
             if (err) {
               console.error(err);
               return;
             }
           }
         );      
     };

  return (
    <ResultWrapper>
    <ListHeader>Result</ListHeader>

    <input placeholder='Search' onChange={(e) => {
      setSearch(e.target.value)
    }}></input>

    <SearchAutoWrapper>
    {
      // eslint-disable-next-line array-callback-return
      programs.filter((val) => {
        if(search === ""){
          return val
        } else if (val.value.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }).map((program) => (
          <button onClick={()=>{
            getPrograms(program.value)
          }}>{program.value}</button>
          ))}
    </SearchAutoWrapper>
    
    
    { heading && <h1>{heading}</h1>}
  
    { result.length ? (<>
        { result.map((group ,index) => (
          <motion.div key={group.id} initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <ResultCard result={group} index={index}/>
          </motion.div>
          ))}
          </>
        ):(<></>)
      }
    </ResultWrapper>
  )
}

export default Result