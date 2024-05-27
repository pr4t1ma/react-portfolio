export const Intro = () => {
  return (
    <div className=" intro container bg-white my-20 mx-4 w-fit text-left p-20 shadow-2xl lg:mx-auto ">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="md:order-2">
          <img src="images/profile-pic.png" alt="" />
        </div>
        <div className="max-w-3xl">
          <p className="py-0 text-4xl text-tan">My name is </p>
          <h1 className=" pt-2 text-3xl lg:text-5xl">Pratima Maharjan</h1>
          <h2 className="py-2 text-xl">
            I am currently Learning Web development
          </h2>
          <div className="info-me my-1">
            <p>
              I'm a UI/UX designer diving into web development. I'm passionate
              about creating seamless user experiences by blending design with
              technology. I am currently focusing to learn HTML, CSS Javascript
              and React(Frontend web development). My Hobby is watching movies,
              listening to music and travelling.
            </p>
          </div>
          <div className="my-10 flex gap-5">
            <button>Hey</button>
            <a href="/" className="button">
              Link with Btn style
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
