export const Intro = () => {
  return (
    <div className=" intro container bg-white mt-20 mx-auto text-left p-20 shadow-2xl">
      <div className="py-5 text-4xl text-tan">
        <p>My name is </p>
      </div>
      <h1 className=" pt-6 text-3xl lg:text-5xl">Pratima Maharjan</h1>
      <h2 className="py-4 text-xl">I am currently Learning Web development</h2>
      <div className="info-me my-1">
        <p>
          I am currently focusing to learn HTML, CSS Javascript and
          React(Frontend web development). My Hobby is watching movies,
          listening to music and travelling.
        </p>
      </div>
      <div className="my-6 flex gap-5">
        <button>Hey</button>
        <a href="/" className="button">
          Link with Btn style
        </a>
      </div>
    </div>
  );
};
