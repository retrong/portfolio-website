"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
		num: '01',
		title: 'Mobile Development',
		description:
			'I design and develop scalable mobile applications with clean, reusable interfaces that support long-term maintenance and efficient product growth.',
		href: '',
	},
	{
		num: '02',
		title: 'Web Development',
		description:
			'I Build pixel perfect reusable frontend for easy maintenance and affordable development cost. Using technical or non technical tools.',
		href: '',
	},
	{
		num: '03',
		title: 'Full Stack',
		description:
			'Creating a fast flowing fullstack website with api integrating and well structured database, using Javascript, NodeJS, Mongo DB, RestApi...',
		href: '',
	},
	{
		num: '04',
		title: 'SEO',
		description:
			'Building SEO optimized website and modifying existing website for high user attraction and retention.',
		href: '',
	},
];

const Service = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
            <motion.div initial={{opacity: 0}} animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
            }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                {services.map((service, index) => {
                    return (
                        <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent cursor-pointer group-hover:text-outline-hover'>{service.num}</div>
                                <Link href={service.href} className='w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-3xl' />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            {/* add a toggle to description that opens it up for more of the description to open up and the visible one has an abbreviation with 3dots */}
                            <p className='text-white/60'>{service.description}</p>
                            {/* border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    )
                })}
            </motion.div>
        </div>

    </section>
  )
}

export default Service