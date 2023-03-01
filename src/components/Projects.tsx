import React from "react";
import Card from "./Card";

const Projects = ({projects}: any) => {

  const projectsDummy = [{
    projectName: 'test',
    projectDetails: 'esto es un texto muy largo capaz de contener 3500 veces su poder, todo esto para poder contemplar el poder de la card que acabo de programar, sin este texto, nada tendria sentido y el mundo tal y como lo conocemos dejaria de ser real',
    linkTo: 'http://google.es',
  },]

  return (
      <div id="projects" className="h-screen justify-center flex text-center flex-col">
        <h3> Projects: Coming soon</h3>
        <div className="grid grid-cols-2 h-auto w-auto pt-10">
          {projects.map((p : any, i: number) => 
          <Card key={i} cardTitle={p.projectName} cardContent={p.projectDetails} linkTo={p.linkTo}/>)}
        </div>
      </div>
  );
};

export default Projects;
