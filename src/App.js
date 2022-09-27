import "./App.css";
import User from "./component/user";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    setLists(JSON.parse(localStorage.getItem("lists")));
  }, []);

  return (
    <>
      <User data={lists}></User>
    </>
  );
}

export default App;
