import { FC } from 'react';
import Image from 'next/image';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl?: URL;
    previewUrl?: URL;
}

const ProjectCard: FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="flex flex-col items-center">
            <div className='h-300 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                <Image
                    className='rounded-t-xl'
                    src={imgUrl}
                    alt={title}
                    height={300}
                    width={400}
                />

                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 group/link' >
                    {gitUrl && (

                        <Link href={gitUrl} className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
                        </Link>
                    )}
                    {previewUrl && (
                        <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
                        </Link>
                    )}
                </div>
            </div >

            <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 w-full max-w-[400px]'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div >
    )
}

export default ProjectCard;