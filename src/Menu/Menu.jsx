export const Menu = ({ items }) => {
  return (
    <div>
      <ul className="flex justify-center gap-10  ">
        {items.map((item) => (
          <li key={item.label}>
            <a className="hover:font-bold ease-in-out" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
