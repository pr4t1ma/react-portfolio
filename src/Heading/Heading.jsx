export const Heading = ({ text }) => {
  return (
    <div className=" w-2/4  mx-auto items-left flex gap-5  justify-left my-20">
      <h1 className="text-2xl font-bold ">{text}</h1>
      <div className="border border-1  border-solid border-oxblood h-0  flex-1 my-4"></div>
    </div>
  );
};
