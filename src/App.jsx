import { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import {
  CVInfoHolder,
  CVSectionPass,
  PrivateInfoPass,
} from "./logic/UseStateInfoHolders";

function App() {
  const cvInfoHolder = CVInfoHolder();
  const [inputValue, setValue] = useState(cvInfoHolder);
  const [activateSections, setActivateSections] = useState(CVSectionPass);
  const [privateInfos, setPrivateInfos] = useState(PrivateInfoPass);
  return (
    <>
      <Header />
      <div className="content">
        <Form
          setValue={setValue}
          inputValue={inputValue}
          setActivateSections={setActivateSections}
          activateSections={activateSections}
          setPrivateInfos={setPrivateInfos}
          privateInfos={privateInfos}
        />
        <CV
          privateInfos={privateInfos}
          inputValue={inputValue}
          activateSections={activateSections}
        />
      </div>
    </>
  );
}

export default App;
