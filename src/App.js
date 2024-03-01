import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // Make a request for a user with a given ID

  const [data, setData] = useState(null);
  const [render, setRender] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true")

      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    setRender(render + 1);
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <h1>{data.title}</h1>
          <img src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
          <p>{data.date}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
