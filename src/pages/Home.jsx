import React, { useState, useEffect } from "react";
import GroupCard from "../components/GroupCard";
import { ListHeader, HomeWrapper } from "../styles/HomeStyle";
import IndividualCard from "../components/IndividualCard";
import { motion } from "framer-motion";
import Loader from "../components/common/Loader";
import ConfettiExplosion from "react-confetti-explosion";
import { fetchRecords } from "../utils/airtableService";


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
    try {
      const tableName = "Group";
      const filterBy = "";
      const sortField = "Total";
      const sortDirection = "desc";
      const records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection
      );
      setGroups(records);
    } catch (error) {
      console.error(error);
    }
  };

  const getIndividualRank = async () => {
    try {
      const tableName = "Participants";
      const filterBy = "";
      const maxRecords = 10;
      const sortField = "Points";
      const sortDirection = "desc";
      const records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection,
        maxRecords
      );
      setIndividuals(records);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <HomeWrapper>
      <div>
        <ListHeader>TEAM</ListHeader>
        {groups.length ? (
          <>
            <center>
              <ConfettiExplosion />
            </center>
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
