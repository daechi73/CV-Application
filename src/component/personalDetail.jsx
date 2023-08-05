const PersonalDetail = (props) => {
  return (
    <section id="CV-personalDetail" className="CV-personalDetail CV">
      <div id="CV-personalDetail-name">
        {props.inputValue["CV-personalDetail-name"]}
      </div>
      <div id="CV-personalDetail-email">
        {props.inputValue["CV-personalDetail-email"]}
      </div>
      <div id="CV-personalDetail-phone">
        {props.inputValue["CV-personalDetail-phone"]}
      </div>
      <div id="CV-personalDetail-address">
        {props.inputValue["CV-personalDetail-address"]}
      </div>
    </section>
  );
};

export default PersonalDetail;
