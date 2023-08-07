const CVInfoHolder = () => {
  return {
    "CV-privateDetail-name": "",
    "CV-privateDetail-email": "",
    "CV-privateDetail-phone": "",
    "CV-privateDetail-address": "",
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
    privateDetail: false,
    education: false,
    experience: false,
    personal: false,
  };
};

const PrivatePass = () => {
  return {
    email: false,
    address: false,
    phone: false,
  };
};

export { CVInfoHolder, CVSectionPass, PrivatePass };
