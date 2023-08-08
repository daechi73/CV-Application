const EducationSection = (props) => {
  return (
    <section id="CV-education">
      <div className="CV-education-title">Education:</div>
      <div id="CV-education-institutionName" className="CV-education">
        <span className="label-education-institutionName"> School Name: </span>
        {props.inputValue["CV-education-institutionName"]}
      </div>
      <div id="CV-education-degree" className="CV-education">
        <span className="label-education-degree">Degree: </span>
        {props.inputValue["CV-education-degree"]}
      </div>
      <div id="CV-education-startDate" className="CV-education">
        <span className="label-education-startDate">Start Date: </span>
        {props.inputValue["CV-education-startDate"]}
      </div>
      <div id="CV-education-endDate" className="CV-education">
        <span className="label-education-endDate">End Date: </span>
        {props.inputValue["CV-education-endDate"]}
      </div>
    </section>
  );
};
export default EducationSection;
