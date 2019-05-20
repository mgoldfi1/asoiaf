import React, { useEffect, useState } from "react";

const House = ({ data }) => {
  console.log("DATADATA", data);

  const [lord, setLord] = useState({});
  const fetchLord = async () => {
    try {
      if (data.currentLord) {
        const res = await fetch(data.currentLord);
        const result = await res.json();
        console.log(result);
        if (result) {
          setLord(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLord();
  }, []);

  return (
    <div class="house-card">
      <h2 style={{ textAlign: "center" }}>{data.name}</h2>
      <p>
        <b>Coat of Arms</b>: {data.coatOfArms}
      </p>
      <p>
        <b>Region</b>: {data.region}
      </p>
      <p>
        <b>Words</b>: {data.words}
      </p>
      <p>
        <b>Founded</b>: {data.founded}
      </p>
      <p>
        <b>Current Lord</b>: {lord.name}
      </p>
    </div>
  );
};

export default House;
