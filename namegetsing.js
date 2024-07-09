import React, { useEffect, useState } from "react";

const Githubuser = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.location}</h1>
    </div>
  );
};

const Hookfetchdata = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/HassanHafeez')
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (data) {
    return (
      // <pre>{JSON.stringify(data, null, 3)}</pre>
      <Githubuser name={data.name} bio={data.bio} />
    );
  }

  return (
    <>
      <p>Hook fetch data!</p>
    </>
  );
};

export default Hookfetchdata;
