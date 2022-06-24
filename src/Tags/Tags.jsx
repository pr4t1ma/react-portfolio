export const Tags = ({ items }) => {
  return (
    <div className="my-10 ">
      <ul className="flex justify-end">
        {items.map((item) => (
          <li>
            <a className="p-3  " src={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
