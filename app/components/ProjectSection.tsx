import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project that I worked on",
        imgUrl: "/images/profile.jpg",
        gitUrl: "https://github.com",
        previewUrl: "https://github.com",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project that I worked on",
        imgUrl: "/images/projects/2.webp",
        gitUrl: "https://github.com",
        previewUrl: "https://github.com",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Senior Design USAF Dashboard",
        description: "This is a project that I worked on",
        imgUrl: "/images/projects/3.png",
        gitUrl: "https://github.com",
        previewUrl: "https://github.com",
        tag: ["All", "Web"]
    }
]

const ProjectSection = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div>
                {PROJECTS.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
}

export default ProjectSection;
