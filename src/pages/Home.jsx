import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import backendUrl from "../const/backendUrl";
import GroupCard from "../components/GroupCard";
import { ListHeader, HomeWrapper } from "../styles/HomeStyle";
import IndividualCard from "../components/IndividualCard";


const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
    `${backendUrl.airtableBase}`
  );


function Home() {

    const [groups, setGroups] = useState([]);
    const [individuals, setIndividuals] = useState([]);

    useEffect(() => {
        getGroupRank();
        getIndividualRank();
        const intervalCall = setInterval(() => {
            getGroupRank();
            getIndividualRank();    
        }, 30000);
        return () => {
          clearInterval(intervalCall);
        };
      }, []);

      const getGroupRank = async () => {  
        base("Group")
         .select({ view: "Ranking" })
         .eachPage(
           (records, fetchNextPage) => {
             setGroups(records);
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

     const getIndividualRank = async () => {  
      base("Participants")
       .select({maxRecords: 10, view: "Individual" })
       .eachPage(
         (records, fetchNextPage) => {
           setIndividuals(records);
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
    <HomeWrapper>
      <div>
        <ListHeader>Team Rank</ListHeader>
        { groups.length ? (<>
        { groups.map((group ,index) => (  
            <GroupCard group={group} index={index}/>
          ))}
          </>
        ):(<>Loading...</>)
        }
        </div>
        <div>
        <ListHeader>Individual Rank</ListHeader>
        { individuals.length ? (<>
        { individuals.map((individual ,index) => ( 
          <>
            <IndividualCard individual={individual} index={index}/>
          </>
          ))}
          </>
        ):(<>Loading...</>)
        }
        </div>
    </HomeWrapper>
  )
}

export default Home