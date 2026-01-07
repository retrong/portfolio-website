"use client"

import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCsharp, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const about = {
	title: 'About me',
	description: [
  "I help startups, small businesses, and large organizations design and build clean, scalable web and mobile applications that are easy to maintain and cost-effective to grow. My focus is on creating pixel-perfect, reusable interfaces that balance great user experience with long-term product sustainability.",
  "Having worked across multiple stages of product development — from early concepts to production and scaling — I understand how to build solutions that support business growth, improve efficiency, and drive real value.",
  "Outside of work, I enjoy playing video games, exploring music across different genres, and staying active with basketball."
	],
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Bartholomew Eguoba',
		},
		{
			fieldName: 'Phone',
			fieldValue: '(+234) 905 087 0228',
		},
		{
			fieldName: 'Experience',
			fieldValue: '5+ Years',
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'Nigerian',
		},
		{
			fieldName: 'Email',
			fieldValue: 'eguobabarth@gmail.com',
		},
		{
			fieldName: 'Freelance',
			fieldValue: 'Available',
		},
		{
			fieldName: 'Language',
			fieldValue: 'English',
		},
	],
};


const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'My experience',
	description:
		"You'll find below my work experiences, from past to present.",
	items: [
		{
			company: 'E-Scape Technologies',
			position: 'Lead Web and Mobile Developer',
			duration: 'Sept 2025 - Present',
		},
		{
			company: 'HireHuub',
			position: 'Lead Front-End Developer',
			duration: 'Nov 2024 - Present',
		},
		{
			company: 'Gfams Co-Operative / Intrinsic',
			position: 'Lead Front-End Developer',
			duration: 'Jan 2024 - Dec 2024',
		},
		{
			company: 'Black Shakara',
			position: 'Front-End Developer',
			duration: '2023 - 2024',
		},
		{
			company: 'Ingressive for Good(I4G)',
			position: 'Web Developer Intern',
			duration: '2022 - 2022',
		},
		{
			company: 'Edo Innovation Hub',
			position: 'IT, Cloud Practitioner(AWS)',
			duration: '2021 - 2021',
		},
		{
			company: 'Digital and Design Studio',
			position: 'Photo Editor and Graphics Designer',
			duration: '2017 - 2018',
		},
	],
};

const education = {
	icon: '/assets/resume/cap.svg',
	title: 'My education',
	description:
		'My Educational background and courses taken',
	items: [
		{
			institution: 'Udemy',
			degree: 'Rust Programming Language',
			duration: '2025',
		},
		{
			institution: 'FreeCodeCamp',
			degree: 'Foundational C Sharp With Microsoft',
			duration: '2024',
		},
		{
			institution: 'The Web Development BootCamp',
			degree: 'Full-Stack Web Development',
			duration: '2022',
		},
		{
			institution: 'University of Benin',
			degree: 'Bsc. Computer Science',
			duration: '2017 - 2022',
		},
		{
			institution: 'Mosh Hamadani',
			degree: 'OOP with Javascript',
			duration: '2021',
		},
		{
			institution: 'FreeCodeCamp',
			degree: 'HTML, CSS',
			duration: '2021',
		},
		{
			institution: 'Edo Innovation Hub',
			degree: 'AWS Cloud Practitioner',
			duration: '2021',
		},
	],
};

const skills = {
  title: "My skills",
  description: "Languages and Tools I have learnt and actively using",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
  ],
};




const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <div className="max-w-[600px] w-full text-white/60 mx-auto xl:mx-0 space-y-4">
                  {about.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.institution}
                          </span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[25px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

						{/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 text-sm"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume