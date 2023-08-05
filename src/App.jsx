import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import CV from "./component/CV";
import CVInfoHolder from "./component/CV-infoHolder";

function App() {
  const cvInfoHolder = CVInfoHolder();
  const [inputValue, setValue] = useState(cvInfoHolder);
  const [activateSections, setActivateSections] = useState({
    personalDetail: false,
    education: false,
    experience: false,
    personal: false,
  });
  return (
    <>
      <Header />
      <div className="content">
        <Form
          setValue={setValue}
          inputValue={inputValue}
          setActivateSections={setActivateSections}
        />
        <CV inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;
