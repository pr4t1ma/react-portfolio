import { SimpleProject } from "../SimpleProject/SimpleProject";
import { ProjectText } from "../ProjectText/ProjectText";

export const FeaturedProject = () => {
  return (
    <div className="container mx-auto md:grid md:grid-cols-12">
      <SimpleProject />
      <ProjectText
        title="Featured Projects "
        subtitle="12 column grid system in CSS and Tailwind CSS"
        text="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and np"
      />
    </div>
  );
};
