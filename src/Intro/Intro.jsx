export const Intro = () => {
  return (
    <div className=" intro w-3/4 bg-white mt-20 mx-auto text-left p-20 shadow-2xl">
      <name className="py-5 text-4xl text-tan">
        <p>My name is </p>
      </name>
      <h1 className="pt-5  text-5xl">Pratima Maharjan</h1>
      <h2 className="py-4 text-xl">I am currently Learning Web development</h2>
      <div className="info-me">
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
