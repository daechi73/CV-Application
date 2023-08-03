import "./Form.css";

const Form = () => {
  return (
    <>
      <form className="forms">
        <section className="form-personalDetail form">
          <div className="personalDetail-title">Personal Details:</div>
          <label htmlFor="personalDetail-name">Full Name:</label>
          <input type="text" id="personalDetail-name" />
          <label htmlFor="personalDetail-email">Email:</label>
          <input type="text" id="personanlDetail-email" />
          <label htmlFor="personalDetail-phone">Phone number:</label>
          <input type="number" id="personalDetail-phone" />
          <label htmlFor="personanlDetail-address">Address:</label>
          <input type="text" id="personalDetail-address" />
        </section>
        <section className="form-education form">
          <div className="education-title">Education:</div>
          <label htmlFor="education-InstitutionName">Institution Name:</label>
          <input type="text" id="education-InstitutionName" />
          <label htmlFor="education-degree">Degree:</label>
          <input type="text" id="education-degree" />
          <label htmlFor="education-startDate">Start Date:</label>
          <input type="text" id="education-startDate" />
          <label htmlFor="education-endDate">End Date:</label>
          <input type="text" id="education-endDate" />
        </section>

        <section className="form-experience form">
          <div className="experience-title">Experience:</div>
          <label htmlFor="experience-company">Company:</label>
          <input type="text" id="experience-company" />
          <label htmlFor="experience-role">Role:</label>
          <input type="text" id="experience-role" />
          <label htmlFor="experience-startDate">Start Date:</label>
          <input type="text" id="experience-startDate" />
          <label htmlFor="experience-endDate">End Date:</label>
          <input type="text" id="experience-endDate" />
          <label htmlFor="experience-description">Role description:</label>
          <textarea
            name="experience-description"
            id="experience-description"
            cols="30"
            rows="5"
          ></textarea>
        </section>
        <section className="form-personal form">
          <div className="personal-title">Personal:</div>
          <label htmlFor="personal-content"></label>
          <textarea
            name="personal-content"
            id="personal-content"
            cols="30"
            rows="5"
          ></textarea>
        </section>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
