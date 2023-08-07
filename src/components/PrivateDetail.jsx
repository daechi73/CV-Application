const PrivateDetailSection = (props) => {
  return (
    <section id="CV-privateDetail" className="CV-privateDetail CV">
      <div id="CV-privateDetail-name">
        {props.inputValue["CV-privateDetail-name"]}
      </div>
      <div id="CV-privateDetail-email">
        {props.inputValue["CV-privateDetail-email"]}
      </div>
      <div id="CV-privateDetail-phone">
        {props.inputValue["CV-privateDetail-phone"]}
      </div>
      <div id="CV-privateDetail-address">
        {props.inputValue["CV-privateDetail-address"]}
      </div>
    </section>
  );
};

export default PrivateDetailSection;
