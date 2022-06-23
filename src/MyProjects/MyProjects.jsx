import { Project } from "../Project/Project";
import { ProjectText } from "../ProjectText/ProjectText";

export const Myprojects = () => {
  return (
    <div className="container mx-auto grid grid-cols-12">
      <Project />
      <ProjectText
        title="Featured Projects "
        subtitle="12 column grid system in CSS and Tailwind CSS"
        text="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and np"
      />
    </div>
  );
};
