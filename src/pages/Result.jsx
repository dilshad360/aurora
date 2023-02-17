import React from 'react'
import { useState } from 'react';
import Airtable from 'airtable';
import backendUrl from '../const/backendUrl';
import programs from '../const/programsList';
import { ResultWrapper } from '../styles/ResultStyle';
import { ListHeader } from '../styles/HomeStyle';

function Result() {

    const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
        `${backendUrl.airtableBase}`
      );

    const [result, setResult] = useState([]);


      const getPrograms = async (search) => {  
        base("Result")
         .select({ view: "Programs" , filterByFormula: `({Program} = '${search}')` })
         .eachPage(
           (records, fetchNextPage) => {
            console.log(records)
            setResult(records)
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
    <select onChange={(e)=>{getPrograms(e.target.value)}}>
        <option>Select program</option>
        {programs.map((program) => (
            <option value={program.value} key={program.value}>{program.value}</option>
          ))}
    </select>
    { result.length ? (<>
        { result.map((group ,index) => (
          <>
          <p>{index+1}</p>
          <p>{group.fields.Name}</p>
          <p>{group.fields.Department}</p>
          </>
          ))}
          </>
        ):(<></>)
        }
    </ResultWrapper>
  )
}

export default Result