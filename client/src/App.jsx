import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [requestId, setRequestId] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      const randomid = Math.random().toString(36).substring(7);
      console.log(randomid);
      try {
        await axios.post(
          "http://localhost:3000/api",
          {},
          {
            headers: {
              "x-request-id": randomid,
            },
          }
        );
        setRequestId(randomid);
      } catch (error) {
        console.error(error);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Last Request ID: {requestId}</p>
      </header>
    </div>
  );
}

export default App;
