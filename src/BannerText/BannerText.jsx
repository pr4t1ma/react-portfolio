import { Banner } from "../Banner";

export const BannerText = () => {
  return (
    <div className=" container mx-auto grid grid-cols-2 gap-4 bg-forestgreen p-4 ">
      <div className="">
        <Banner />
      </div>

      <div className="  text-white text-4xl flex justify-center items-center ">
        <p className="leading-loose text-md font-book">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex amet modi
          iste accusamus, nihil aut dicta dignissimos. Eveniet, nesciunt. Ut,
          quod! Consequatur saepe iusto labore voluptatibus commodi. Inventore,
          consequuntur impedit?
        </p>
      </div>
    </div>
  );
};
