export const Tabs = ({ items }) => {
  return (
    <ul className=" border-l-2 border-oxblood border-solid ">
      {items.map((item) => (
        <li
          className={`${
            item.active ? "active" : ""
          } py-3 px-4 hover:bg-oxblood hover:text-White`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
