import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectArr = projects.map((proObj)=>{
    return <ProjectItem key= {proObj.id} name={proObj.name} about={proObj.about} technologies={proObj.technologies} />
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectArr}</div>
    </div>
  );
}

export default ProjectList;
