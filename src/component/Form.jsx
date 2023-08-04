import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const changeValue = (e) => {
    let temp = e.target.id.split("-").splice(1);
    temp = "CV-" + temp[0] + "-" + temp[1];
    const value = {
      ...props.inputValue,
      [`${temp}`]: e.target.value,
    };
    props.setValue(value);
  };
  return (
    <>
      <form className="forms">
        <section className="form-personalDetail form">
          <div className="form-personalDetail-title">Personal Details:</div>
          <label htmlFor="form-personalDetail-name">Full Name:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-personalDetail-name"
          />
          <label htmlFor="form-personalDetail-email">Email:</label>
          <input
            onChange={changeValue}
            type="email"
            id="form-personalDetail-email"
          />
          <label htmlFor="form-personalDetail-phone">Phone number:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-personalDetail-phone"
          />
          <label htmlFor="form-personalDetail-address">Address:</label>
          <input
            onChange={changeValue}
            type="text"
            id="form-personalDetail-address"
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
