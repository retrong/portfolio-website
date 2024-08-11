"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from "react-icons/bs";

const services = [
	{
		num: '01',
		title: 'Web Development',
		description:
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ',
		href: '',
	},
	{
		num: '02',
		title: 'Web Flow',
		description:
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ',
		href: '',
	},
	{
		num: '03',
		title: 'SEO',
		description:
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ',
		href: '',
	},
	{
		num: '04',
		title: 'Consultation',
		description:
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ',
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
                            {/* add a toggle to description that opens it up for more of the description to open up and the visible one has an abbrevation with 3dots */}
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