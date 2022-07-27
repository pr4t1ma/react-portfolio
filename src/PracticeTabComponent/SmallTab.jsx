export const SmallTab = ({ items, onTabChange }) => {
  const onItemClick = (i) => {
    onTabChange(i);
  };
  return (
    <div className="container mx-auto bg-white opacity-40 ">
      <div className="tav-lis">
        <ul className="flex gap-4 px-3">
          {items.map((item, i) => (
            <li
              key={item.label}
              className={`$ {active === i ? "active" : " "} py-3 px-4 hover:bg-oxblood hover:text-white`}
              onClick={() => onItemClick(i)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
