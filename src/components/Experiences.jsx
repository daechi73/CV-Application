const ExperiencesSection = (props) => {
  return (
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
  );
};

export default ExperiencesSection;
