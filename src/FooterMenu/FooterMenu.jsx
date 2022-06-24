export const FooterMenu = ({ items }) => {
  return (
    <div>
      <ul className="flex justify-center my-10">
        {items.map((item) => (
          <li>
            <a className="p-10" src={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
