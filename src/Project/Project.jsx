import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Project = ({ link, text, title }) => {
  return (
    <div className="container mx-3 p-5 my-3  md:mx-auto bg-white shadow-2xl shadow-gray lg:my-10 ">
      <div className="project-header flex justify-between">
        <div className="project-folder ">
          <a className=" text-2xl text-oxblood" href="#">
            <FontAwesomeIcon icon={faFolder} />
          </a>
        </div>
        <div className="polyline text-2xl text-oxblood flex gap-3">
          <a href="#">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="project-title">
        <h3>{title}</h3>
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
