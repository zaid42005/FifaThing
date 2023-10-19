import React, { useState } from "react";
import List from "./List";

function App() {
  //hardcoded objects for now
  const [list1, setList1] = useState({
    Zaid: false,
    Warda: false,
    Jannat: false,
  });
  const [list2, setList2] = useState({
    Hassan: false, //goat
    Maria: false,
    Ahsan: false,
    Ali: false,
  });

  const handleBigClick = (from, setFrom, to, setTo) => {//takes lists as parameters for which way u wanna go
    
    const transferFrom = { ...from };
    const transferTo = { ...to };
    const updatedTo = { ...transferTo, ...transferFrom };
    Object.keys(updatedTo).forEach((key) => {
      updatedTo[key] = false;
    });
    // set all them boys to false and update w the setters
    setTo(updatedTo);
    setFrom({});
  };

  const handleSmallClick = (from, setFrom, to, setTo) => {
    const transferFrom = { ...from };
    const transferTo = { ...to }; //same thing
    Object.keys(transferFrom).forEach((key) => {
      if (transferFrom[key] === true) {
        transferTo[key] = false;
        delete transferFrom[key];
      }
    });
    Object.keys(transferTo).forEach((key) => {
      transferTo[key] = false;
    });
    setTo(transferTo);
    setFrom(transferFrom); //setters
  };
  return (
    //this div does not want to be in the heckin middle
    <div className="container">
      <List list={list1} setList={setList1}></List>
      <div className="buttons">
        <button
          onClick={() => {
            handleBigClick(list2, setList2, list1, setList1); //transfer all to one side
          }}
        >
          {"<<"}
        </button>
        <button // call transfer checked with the params accordingly
          onClick={() => {
            handleSmallClick(list2, setList2, list1, setList1);
          }}
        >
          {"<"}
        </button>
        <button
          onClick={() => handleSmallClick(list1, setList1, list2, setList2)}
        >
          {">"}
        </button>
        <button
          onClick={() => {
            handleBigClick(list1, setList1, list2, setList2);
          }}
        >
          {">>"}
        </button>
      </div>
      <List list={list2} setList={setList2}></List>
    </div>
  );
}

export default App;
