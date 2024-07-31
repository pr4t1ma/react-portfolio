import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Project = ({ link, text, title, img, figma, github, web }) => {
  return (
    <div className=" md:mx-auto bg-white shadow-2xl shadow-gray lg:my-10 p-7 ">
      <div className="project-header flex justify-between">
        <div className="project-folder ">
          <FontAwesomeIcon className=" text-2xl text-oxblood" icon={faFolder} />
        </div>
        <div className="polyline text-2xl text-oxblood flex gap-3 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pr4t1ma.github.io/portfolio/"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          {github && (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pr4t1ma/react-portfolio"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {figma && (
            <a target="_blank" rel="noreferrer" href={figma}>
              <FontAwesomeIcon icon={faFigma} />
            </a>
          )}
        </div>
      </div>
      <div className="project-title">
        <img src={img} alt="" />
        <h3 className="text-3xl text-warmGray-800 bold my-2">{title}</h3>
      </div>
      <div className="project-description">
        <p>{text}</p>
      </div>
    </div>
  );
};
