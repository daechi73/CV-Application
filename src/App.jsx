import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import CV from "./component/CV";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Form />
        <CV />
      </div>
    </>
  );
}

export default App;
