"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
interface Project {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    gitUrl: URL;
    previewUrl: URL;
    tag: string[];
}

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project that I worked on",
        imgUrl: "/images/profile.jpg",
        gitUrl: new URL("https://github.com"),
        previewUrl: new URL("https://github.com"),
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project that I worked on",
        imgUrl: "/images/projects/2.webp",
        gitUrl: new URL("https://github.com"),
        previewUrl: new URL("https://github.com"),
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Senior Design USAF Dashboard",
        description: "This is a project that I worked on",
        imgUrl: "/images/projects/3.png",
        gitUrl: new URL("https://github.com"),
        previewUrl: new URL("https://github.com"),
        tag: ["All", "Web"]
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project: Project, index: number) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
