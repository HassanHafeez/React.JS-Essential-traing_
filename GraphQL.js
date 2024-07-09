import React, { useEffect, useState } from "react";

const query = `
  query {
    allLifts {
      name
      elevationGain
      status
      id
    }
  }
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

const Lift = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>ID: {props.id}</p>
      <p>Elevation Gain: {props.elevationGain}</p>
      <p>Status: {props.status}</p>
    </div>
  );
};

const Hookfetchdata2 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://snowtooth.moonhighway.com/', opts)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading ...</h3>;
  if (!data) return null;

  // Log the fetched data
  // console.log(data, "This is Data: ");

  return (
    <>
      <div>
        {data.allLifts.map((lift) => (
          <Lift
            key={lift.id}
            name={lift.name}
            id={lift.id}
            elevationGain={lift.elevationGain}
            status={lift.status}
          />
        ))}
      </div>
    </>
  );
};

export default Hookfetchdata2;
