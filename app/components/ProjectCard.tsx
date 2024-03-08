import { FC } from 'react';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className="h-64 md:h-72 bg-cover bg-center"
                style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
            >
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;