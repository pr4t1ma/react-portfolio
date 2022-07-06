export const Tabs = ({ items }) => {
  return (
    <ul className=" border-l-2 border-oxblood border-solid ">
      {items.map((item) => (
        <li
          key={item.label}
          className={`${
            item.active ? "active" : ""
          } py-3 px-4 hover:bg-oxblood hover:text-white`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
