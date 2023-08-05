const CVInfoHolder = () => {
  return {
    "CV-personalDetail-name": "",
    "CV-personalDetail-email": "",
    "CV-personalDetail-phone": "",
    "CV-personalDetail-address": "",
    "CV-education-institutionName": "",
    "CV-education-degree": "",
    "CV-education-startDate": "",
    "CV-education-endDate": "",
    "CV-experience-company": "",
    "CV-experience-role": "",
    "CV-experience-startDate": "",
    "CV-experience-endDate": "",
    "CV-experience-description": "",
    "CV-personal-content": "",
  };
};

const CVSectionPass = () => {
  return {
    personalDetail: false,
    education: false,
    experience: false,
    personal: false,
  };
};

export { CVInfoHolder, CVSectionPass };
