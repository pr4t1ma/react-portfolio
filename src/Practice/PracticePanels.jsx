export const PracticePanels = ({ text, date, heading, subHeading }) => {
  return (
    <div>
      <h1>Panel Practice</h1>
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>
      <p>{text}</p>
    </div>
  );
};
