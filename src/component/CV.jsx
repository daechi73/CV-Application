import "./CV.css";
import PersonalDetailSection from "./PersonalDetail";
import ExperiencesSection from "./Experiences";
import EducationSection from "./Education";
import PersonalSection from "./PersonalDetail";

const CV = (props) => {
  return (
    <>
      <div className="container-CV">
        {props.activateSections.personalDetail ? (
          <PersonalDetailSection inputValue={props.inputValue} />
        ) : (
          ""
        )}
        {props.activateSections.education ? (
          <EducationSection inputValue={props.inputValue} />
        ) : (
          ""
        )}
        {props.activateSections.experience ? (
          <ExperiencesSection inputValue={props.inputValue} />
        ) : (
          ""
        )}
        {props.activateSections.personal ? (
          <PersonalSection inputValue={props.inputValue} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CV;
