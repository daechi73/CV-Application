const EducationSection = () => {
  return (
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
  );
};
export default EducationSection;
