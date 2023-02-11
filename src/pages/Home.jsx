import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import backendUrl from "../const/backendUrl";
import GroupCard from "../components/GroupCard";


const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
    `${backendUrl.airtableBase}`
  );


function GroupRanking() {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getGroupRank();
        const intervalCall = setInterval(() => {
            getGroupRank();    
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

  return (
    <div>
        <h1>Team Rank</h1>
        { groups.length ? (<>
        { groups.map((group ,index) => (  
            <GroupCard group={group} index={index}/>
          ))}
          </>
        ):(<>Loading...</>)
        }
    </div>
  )
}

export default GroupRanking