import React from "react";
import "./App.css";
import SuperSecret from "./Components/SuperSecret";
import OnOffButton from "./Components/OnOffButton";
import AccordianMenu from "./Components/AccordianMenu";

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true} />
      <OnOffButton />
      <AccordianMenu title="Aloha!">
        <p>
          {" "}
          this p tag is the "props.children" for the AccordianMenu component{" "}
        </p>
      </AccordianMenu>
    </div>
  );
}

export default App;
