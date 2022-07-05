export const Menu = ({ items }) => {
  return (
    <div className=" item-left gap-5  items-center md:flex md:justify-start md:col-span-1 lg:col-span-3 lg:justify-end  ">
      <ul className="divide-y divide-tan md:flex md:justify-center md:gap-12 md:border-none md:divide-none ">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="hover:font-bold ease-in-out py-3 px-4 block"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className=" block  md:block lg:inline-block  lg:ml-3 ">
        <button className="w-full text-xl">Resume</button>
      </div>
    </div>
  );
};
