export const YoutubeMenu = ({ items }) => {
  return (
    <div className="container mx-auto my-7">
      <ul className="flex gap-4 ">
        {items.map((item) => (
          <li className="hover:border-b-2 p-1">{item.label}</li>
        ))}
      </ul>
    </div>
  );
};
