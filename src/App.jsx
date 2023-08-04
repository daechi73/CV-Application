import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import CV from "./component/CV";
import CVInfoHolder from "./component/CV-infoHolder";

function App() {
  const cvInfoHolder = CVInfoHolder();
  const [value, setValue] = useState(cvInfoHolder);
  return (
    <>
      <Header />
      <div className="content">
        <Form setValue={setValue} inputValue={value} />
        <CV inputValue={value} />
      </div>
    </>
  );
}

export default App;
