import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import { CVInfoHolder, CVSectionPass } from "./logic/UseStateInfoHolders";

function App() {
  const cvInfoHolder = CVInfoHolder();
  const [inputValue, setValue] = useState(cvInfoHolder);
  const [activateSections, setActivateSections] = useState(CVSectionPass);
  return (
    <>
      <Header />
      <div className="content">
        <Form
          setValue={setValue}
          inputValue={inputValue}
          setActivateSections={setActivateSections}
          activateSections={activateSections}
        />
        <CV inputValue={inputValue} activateSections={activateSections} />
      </div>
    </>
  );
}

export default App;
