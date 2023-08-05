import "./CV.css";
import PrivateDetailSection from "./PrivateDetail";
import ExperiencesSection from "./Experiences";
import EducationSection from "./Education";
import PersonalSection from "./PrivateDetail";

const CV = (props) => {
  return (
    <>
      <div className="container-CV">
        {props.activateSections.privateDetail ? (
          <PrivateDetailSection inputValue={props.inputValue} />
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
