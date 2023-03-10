import React from "react";
import { TeamCard } from "../styles/CardStyle";
import Star from "../assets/star.png";

function GroupCard({ group, index }) {
  return (
    <TeamCard inputColor={group.fields.color} >
      <h3>{index + 1}</h3>
      <div>
        <h1>{group.fields.Team}</h1>
        <h2>{group.fields.Name}</h2>
      </div>
      {index === 0 &&  
              <img src={Star} alt="STAR" />
      }
      <h1>
        {group.fields.Total}
        <span> pts</span>
      </h1>
    </TeamCard>
  );
}

export default GroupCard;
