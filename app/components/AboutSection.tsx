"use client";
import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor's of Computer Science</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Dalmore Technology</li>
            </ul>
        )
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tabName: string) => {
        isPending;
        startTransition(() => {
            setTab(tabName);
        });
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap:8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src={"/images/profile.jpg"}
                    alt="Profile Picture"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4 font-bold text-vhite mb-4">About ME</h2>
                    <p className="text-base md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae placeat unde deserunt, doloremque molestias officiis mollitia at, quisquam delectus ad sapiente amet quaerat similique minima totam. Vitae, id illo!</p>
                    <div className="flex flex-row mt-8" >
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((item) => item.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;