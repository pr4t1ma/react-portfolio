import { Tags } from "../Tags/Tags";

export const ProjectText = ({ title, subtitle, text }) => {
  const items = [
    { label: "HTML", href: "/" },
    { label: "Grid", href: "/" },
    { label: "Flex", href: "/" },
    { label: "Bootstrape", href: "/" },
    { label: "TailwindCSS", href: "/" },
    { label: "React", href: "/" },
  ];
  return (
    <div className=" md:col-start-5 md:col-end-12 md:flex-1 md:row-start-1 md:row-end-2  ">
      <div className="project-title text-oxblood font-bold text-right mb-5 ">
        <h1 className="text-2xl text-black ">{title}</h1>
        <h2 className="text-xl py-3 flex-end">{subtitle}</h2>
      </div>

      <p className="bg-forestgreen text-white px-5 mb-10  py-8  shadow-2xl shadow-gray">
        {" "}
        {text}
      </p>
      <Tags items={items} />
    </div>
  );
};
