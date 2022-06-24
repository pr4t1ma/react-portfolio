export const Project = ({ link, text }) => {
  return (
    <div className="container mx-auto p-8 bg-white shadow-2xl shadow-gray my-20">
      <div className="project-header flex justify-between">
        <div className="project-folder ">
          <a href="#"> this is a link too</a>
        </div>
        <div className="polyline">
          <a href="#"> this is a link</a>
          <a href="#">this is a second column second link</a>
        </div>
      </div>
      <div className="project-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsum
          recusandae ut, cumque veniam vero asperiores totam quaerat ab quisquam
          id eligendi, tempora facilis nisi magni. Cum ut eveniet rerum.
        </p>
      </div>
    </div>
  );
};
