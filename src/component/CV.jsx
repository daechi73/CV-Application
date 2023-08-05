import "./CV.css";
import PersonalDetail from "./PersonalDetail";

const CV = (props) => {
  return (
    <>
      <div className="container-CV">
        {props.activateSections.personalDetail ? (
          <PersonalDetail inputValue={props.inputValue} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CV;
