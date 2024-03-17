import React from "react";
import { useState, useEffect } from "react";
import { ResultWrapper, SearchAutoWrapper } from "../styles/ResultStyle";
import { ListHeader } from "../styles/HomeStyle";
import ResultCard from "../components/ResultCard";
import { motion } from "framer-motion";
import Loader from "../components/common/Loader";
import { fetchRecords } from "../utils/airtableService";

function Result() {


  const [result, setResult] = useState([]);
  const [programList, setProgramList] = useState([]);
  const [search, setSearch] = useState("");
  const [heading, setHeading] = useState("");

  const getPrograms = async (search) => {

    try {
      const tableName = "Result";
      const filterBy = `{Program} = '${search}'`;
      const maxRecords = "";
      const sortField = "Point";
      const sortDirection = "asc";
      const records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection,
        maxRecords
      );
      setResult(records);
      setHeading(search);
    } catch (error) {
      console.error(error);
    }

  };

  const getProgramsList = async (search) => {

    try {
      const tableName = "Published Programs";
      const filterBy = "";
      const maxRecords = "";
      const sortField = "Name";
      const sortDirection = "asc";
      const records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection,
        maxRecords
      );
      setProgramList(records);
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    getProgramsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResultWrapper>
      <ListHeader>RESULT</ListHeader>

      <input
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>

      <SearchAutoWrapper>
        {
          programList.length ? (<>{
            programList
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.fields.Name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((program) => (
                <button
                  key={program.id}
                  onClick={() => {
                    getPrograms(program.fields.Name);
                  }}
                >
                  {program.fields.Name}
                </button>
              ))
          }

          </>) : (<Loader />)
        }
      </SearchAutoWrapper>
      <p><i>{programList.length} results published</i></p>

      {heading && <h1>{heading}</h1>}

      {result.length ? (
        <>
          {result.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ResultCard result={group} index={index} />
            </motion.div>
          ))}
        </>
      ) : (
        <motion.div
          animate={{
            scale: [1, 2, 3, 2, 1],
          }}
        >👆🏻</motion.div>
      )}
    </ResultWrapper>
  );
}

export default Result;
