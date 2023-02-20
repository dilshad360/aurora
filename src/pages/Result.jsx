import React from "react";
import { useState, useEffect } from "react";
import Airtable from "airtable";
import backendUrl from "../const/backendUrl";
import { ResultWrapper, SearchAutoWrapper } from "../styles/ResultStyle";
import { ListHeader } from "../styles/HomeStyle";
import ResultCard from "../components/ResultCard";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

function Result() {
  const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
    `${backendUrl.airtableBase}`
  );

  const [result, setResult] = useState([]);
  const [programList, setProgramList] = useState([]);
  const [search, setSearch] = useState("");
  const [heading, setHeading] = useState("");

  const getPrograms = async (search) => {
    base("Result")
      .select({
        view: "Programs",
        filterByFormula: `({Program} = '${search}')`,
      })
      .eachPage(
        (records, fetchNextPage) => {
          setResult(records);
          setHeading(search);
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

  const getProgramsList = async (search) => {
    base("Published Programs")
      .select({
        view: "Grid view",
      })
      .eachPage(
        (records, fetchNextPage) => {
          setProgramList(records)
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

  useEffect(() => {
    getProgramsList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResultWrapper>
      <ListHeader>Result</ListHeader>

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
          }</>) : (<Loader/>)
        }


        
      </SearchAutoWrapper>

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
        <>👆🏻</>
      )}
    </ResultWrapper>
  );
}

export default Result;
