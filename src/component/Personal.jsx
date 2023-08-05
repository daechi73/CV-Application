const PersonalSection = () => {
  return (
    <section className="CV-personal">
      <div id="CV-personal-content">
        {props.inputValue["CV-personal-content"]}
      </div>
    </section>
  );
};

export default PersonalSection;
