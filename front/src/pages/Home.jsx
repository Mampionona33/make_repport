import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar/Calendar";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Appel API vers votre backend Express
    // fetch("/api/data")
    //   .then((response) => response.json())
    //   .then((data) => setData(data.message))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Données du serveur : {data}</p>
      <Calendar />
    </div>
  );
};

export default Home;
