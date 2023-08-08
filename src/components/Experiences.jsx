import "../css/Experiences.css";

const ExperiencesSection = (props) => {
  return (
    <section className="CV-experience">
      <div className="CV-experience-title">Experience:</div>
      <div className="CV-experience-content">
        <div id="CV-experience-company">
          <span className="label-experience-company">Company: </span>
          {props.inputValue["CV-experience-company"]}
        </div>
        <div id="CV-experience-role">
          <span className="label-experience-role">Role: </span>
          {props.inputValue["CV-experience-role"]}
        </div>
        <div id="CV-experience-startDate">
          <span className="label-experience-startDate">Start Date: </span>
          {props.inputValue["CV-experience-startDate"]}
        </div>
        <div id="CV-experience-endDate">
          <span className="label-experience-endDate">End Date: </span>
          {props.inputValue["CV-experience-endDate"]}
        </div>
        <div id="CV-experience-description">
          <span className="label-experience-description">Description: </span>
          {props.inputValue["CV-experience-description"]}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
