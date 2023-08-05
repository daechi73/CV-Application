import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import CV from "./component/CV";
import { CVInfoHolder, CVSectionPass } from "./component/UseStateInfoHolders";

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
