import "../css/Form.css";

const Form = (props) => {
  const changeActivateSections = (validation, section) => {
    const newActivateSections = {
      ...props.activateSections,
      [section]: validation,
    };
    console.log(newActivateSections);

    props.setActivateSections(newActivateSections);
  };

  const sectionActivator = (value, section, CVId) => {
    let count = 0;
    if (value !== "") return changeActivateSections(true, section);
    else {
      for (const i in props.inputValue) {
        if (i.includes(section)) {
          if (i !== CVId || CVId === "CV-personal-content") {
            if (CVId === "CV-personal-content")
              if (value !== "") return changeActivateSections(true, section);
              else return changeActivateSections(false, section);
            if (props.inputValue[i] !== "") {
              return changeActivateSections(true, section);
            } else {
              count++;
              if (count === 3) changeActivateSections(false, section);
            }
          }
        }
      }
    }
  };

  const privateDetailInfoActivator = (privateInfo, value) => {
    if (value) {
      for (const i in props.privateInfos) {
        if (i === privateInfo)
          return props.setPrivateInfos({ ...props.privateInfos, [i]: true });
      }
    } else {
      for (const i in props.privateInfos) {
        if (i === privateInfo)
          return props.setPrivateInfos({ ...props.privateInfos, [i]: false });
      }
    }
  };

  const changeValue = (e) => {
    const temp = e.target.id.split("-").splice(1);
    const CVId = "CV-" + temp[0] + "-" + temp[1];
    const value = {
      ...props.inputValue,
      [`${CVId}`]: e.target.value,
    };
    sectionActivator(e.target.value, temp[0], CVId);
    privateDetailInfoActivator(temp[1], e.target.value);
    props.setValue(value);
  };
  return (
    <>
      <form className="forms">
        <section className="form-privateDetail form">
          <div className="form-privateDetail-title">Private Details:</div>
          <label htmlFor="form-privateDetail-name">Full Name:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-privateDetail-name"
          />
          <label htmlFor="form-privateDetail-email">Email:</label>
          <input
            onChange={changeValue}
            type="email"
            id="form-privateDetail-email"
          />
          <label htmlFor="form-privateDetail-phone">Phone number:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-privateDetail-phone"
          />
          <label htmlFor="form-privateDetail-address">Address:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-privateDetail-address"
          />
        </section>
        <section className="form-education form">
          <div className="form-education-title">Education:</div>
          <label htmlFor="form-education-institutionName">
            Institution Name:
          </label>
          <input
            onChange={changeValue}
            type="text"
            id="form-education-institutionName"
          />
          <label htmlFor="form-education-degree">Degree:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-education-degree"
          />
          <label htmlFor="form-education-startDate">Start Date:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-education-startDate"
          />
          <label htmlFor="form-education-endDate">End Date:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-education-endDate"
          />
        </section>

        <section className="form-experience form">
          <div className="form-experience-title">Experience:</div>
          <label htmlFor="form-experience-company">Company:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-experience-company"
          />
          <label htmlFor="form-experience-role">Role:</label>
          <input onChange={changeValue} type="text" id="form-experience-role" />
          <label htmlFor="form-experience-startDate">Start Date:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-experience-startDate"
          />
          <label htmlFor="form-experience-endDate">End Date:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-experience-endDate"
          />
          <label htmlFor="form-experience-description">Role description:</label>
          <textarea
            onChange={changeValue}
            name="form-experience-description"
            id="form-experience-description"
            cols="30"
            rows="5"
          ></textarea>
        </section>
        <section className="form-personal form">
          <div className="form-personal-title">Personal:</div>
          <label htmlFor="form-personal-content"></label>
          <textarea
            onChange={changeValue}
            name="form-personal-content"
            id="form-personal-content"
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
