export const Menu = ({ items }) => {
  return (
    <div className="flex item-left gap-5 justify-start flex-wrap lg:justify-end items-center col-span-3  ">
      <ul className=" md:flex justify-center gap-12  ">
        {items.map((item) => (
          <li key={item.label}>
            <a className="hover:font-bold ease-in-out" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className=" block lg:inline-block  ml-3 ">
        <button className=" text-xl">Resume</button>
      </div>
    </div>
  );
};
