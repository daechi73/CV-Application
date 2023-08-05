import "./CV.css";
import PersonalDetail from "./personalDetail";

const CV = (props) => {
  return (
    <>
      <div className="container-CV">
        {props.activateSections.personalDetail ? (
          <PersonalDetail inputValue={props.inputValue} />
        ) : (
          ""
        )}
        <section id="CV-education">
          <div id="CV-education-institutionName">
            {props.inputValue["CV-education-institutionName"]}
          </div>
          <div id="CV-education-degree">
            {props.inputValue["CV-education-degree"]}
          </div>
          <div id="CV-education-startDate">
            {props.inputValue["CV-education-startDate"]}
          </div>
          <div id="CV-education-endDate">
            {props.inputValue["CV-education-endDate"]}
          </div>
        </section>
        <section className="CV-experience">
          <div id="CV-experience-company">
            {props.inputValue["CV-experience-company"]}
          </div>
          <div id="CV-experience-role">
            {props.inputValue["CV-experience-role"]}
          </div>
          <div id="CV-experience-startDate">
            {props.inputValue["CV-experience-startDate"]}
          </div>
          <div id="CV-experience-endDate">
            {props.inputValue["CV-experience-endDate"]}
          </div>
          <div id="CV-experience-description">
            {props.inputValue["CV-experience-description"]}
          </div>
        </section>
        <section className="CV-personal">
          <div id="CV-personal-content">
            {props.inputValue["CV-personal-content"]}
          </div>
        </section>
      </div>
    </>
  );
};

export default CV;
