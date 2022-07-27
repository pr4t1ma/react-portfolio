export const SmallPanels = ({ text, heading, subHeading, date }) => {
  return (
    <div className="container mx-auto p-5 shadow-2xl">
      <div className="title my-2">
        <h1 className="mb-2 text-tan font-bold">{heading}</h1>
        <h2>{subHeading}</h2>
        <h3>{date}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
