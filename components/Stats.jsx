"use client"
import CountUp from 'react-countup';

const stats = [
	{
		num: 4,
		text: 'Years of experience',
	},
	{
		num: 16,
		text: 'Projects completed',
	},
	{
		num: 8,
		text: 'Technologies mastered',
	},
	{
		num: 600,
		text: 'Code commits',
	},
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                        <div className='flex-1 flex gap-4 items-center justify-center' key={index}>
                            <div>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                    loading="lazy"
                                /><span className="text-2xl xl:text-3xl font-bold">+</span>
                            </div>
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 text-sm`}>
                                {item.text}
                            </p>
                        </div>
                    )
                })}  
            </div>

        </div>
    </section>
  )
}

export default Stats