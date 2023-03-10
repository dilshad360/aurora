import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import backendUrl from "../const/backendUrl";
import GroupCard from "../components/GroupCard";
import { ListHeader, HomeWrapper } from "../styles/HomeStyle";
import IndividualCard from "../components/IndividualCard";
import { motion } from "framer-motion";
import Loader from "../components/common/Loader";
import ConfettiExplosion from 'react-confetti-explosion';

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
      .select({ maxRecords: 10, view: "Individual" })
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
        <ListHeader>TEAM</ListHeader>
        {groups.length ? (
          <>
         <center><ConfettiExplosion /></center> 
            {groups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <GroupCard group={group} index={index} />
              </motion.div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <IndividualCard individuals={individuals} />
        </motion.div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
