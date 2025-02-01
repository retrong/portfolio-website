"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import WorkSliderBtns from '@/components/WorkSliderBtns';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Hoobank",
    description:
      "A revamped for an Online Banking system, tailored to making payment and transaction easy.",
    stack: [
      { name: "ReactJs" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/HooBank-snapshot.png",
    live: "https://hoobank-lilac.vercel.app/",
    github: "https://github.com/retrong/bank-app",
  },
  {
    num: "02",
    category: "frontend",
    title: "De'drop",
    description: "An Online Food Website",
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/De-drop-snapshot.png",
    live: "https://dedrop.vercel.app/",
    github: "https://github.com/retrong/Responsive-food-website",
  },
  {
    num: "03",
    category: "frontend",
    title: "Gfams Accounting",
    description:
      'A "Get Quote" interface for companies and individuals to make enquire and get direct feedback about services.',
    stack: [
      { name: "Next.Js" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/work/Instant-Quote-snapshot.png",
    live: "https://quote-account.vercel.app/",
    github: "https://github.com/retrong/quote-project",
  },
  {
    num: "04",
    category: "frontend",
    title: "Aston Luxury Homes",
    description: "An Online website for Luxury homes and Interior",
    stack: [
      { name: "Next,Js" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/work/Aston homes.png",
    live: "https://aston-website.vercel.app/",
    github: "https://github.com/retrong/aston-website",
  },
  {
    num: "04",
    category: "frontend",
    title: "Xyz Company",
    description:
      "XYZ web app dedicated to providing innovative solutions that meet the needs of our customers",
    stack: [
      { name: "Next,Js" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/work/Xyz-company.png",
    live: "https://xyz-ntrinsic.com/",
    github: "https://github.com/retrong/xyzfrontendproject",
  },
];


const Work = () => {

    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state with current slide
        setProject(projects[currentIndex]);
    }
    
  return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project
							</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/* to remove the last comma */}
											{index !== project.stack.length - 1 && ','}
										</li>
									);
								})}
							</ul>
							<div className="border border-white/20"></div>
							<div className='flex items-center gap-4'>
								{/* live project button path */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* github project button path */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className='w-full'>
										<div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
												<div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
												{/* image */}
												<div className='relative w-full h-full'>
													<Image src={project.image} alt='project Image' fill className=' object-contain ' />
												</div>
										</div>
									</SwiperSlide>  
								);
							})}
							{/* buttons */}
							<WorkSliderBtns containerStyles="flex gap-2 absolute right-0 button-[calc(50%_-_220px)] xl:bottom-0 z-20 w-full justify-butween xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Work