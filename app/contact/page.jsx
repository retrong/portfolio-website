"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getCalApi } from '@calcom/embed-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";


const info = [
	{
		icon: <FaPhoneAlt />,
		title: 'Phone',
		description: '(+234) 905 087 0228',
	},
	{
		icon: <FaEnvelope />,
		title: 'Email',
		description: 'eguobabarth@gmail.com',
	},
	{
		icon: <FaMapMarkedAlt />,
		title: 'Address',
		description: 'Lagos, Nigeria',
	},
];

const optionSchema = z.union([
    z.string(),
    z.object({
        value: z.string(),
        // label: z.string(),
    }).optional(),
]);

// form schema
const schema = z.object({
    firstName: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.coerce.number().min(1, 'Phone Number is required'),
    message: z.string().min(10, 'Message must be at least 10 characters long').optional(),
    option: optionSchema,
});

// loading spinner for button
const Spinner = () => (
	<div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
);


const Contact = () => {
    // submit status
    const [submitStatus, setSubmitStatus] = useState(null)

    // Loading feature
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState: {errors}, reset, control } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);

        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        const templateParams = {
            from_name: `${data.firstName} ${data.lastName}`,
            from_email: data.email,
            to_name: "Bartholomew Eguoba",
            message: data.message,
            phone: data.phone,
            option: data.option
        }
        try{
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log("Email sent successfully!", response);
            setSubmitStatus('Message sent successfully!');
            console.log(data)
            reset();
        } catch (error) {
            console.error('Error sending email', error);
            setSubmitStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
	};

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: '30min' });
            cal('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

  return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="xl:h-[54%] order-2 xl:order-none">
						<form
							action=""
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
						>
							<h3 className="text-4xl text-accent">{"Let's"} work together</h3>
							<p className="text-white/60">
								Send me a mail or schedule a meeting through the {'"Book a call"'} button
							</p>
							{/* Inputs */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
								<label className="">
									<Input
										type="firstname"
										placeholder="Firstname"
										{...register('firstName')}
										className="w-full"
									/>
									{errors.firstName && (
										<p className="mt-1 text-sm px-2 text-red-600">
											{errors.firstName.message}
										</p>
									)}
								</label>
								<label className="">
									<Input
										type="Lastname"
										placeholder="Lastname"
										{...register('lastName')}
										className="w-full"
									/>
									{errors.lastName && (
										<p className="mt-1 text-sm px-2 text-red-600">
											{errors.lastName.message}
										</p>
									)}
								</label>
								<label>
									<Input
										type="email"
										placeholder="Email address"
										{...register('email')}
										className="w-full"
									/>
									{errors.email && (
										<p className="mt-1 text-sm px-4 text-red-600">
											{errors.email.message}
										</p>
									)}
								</label>
								<label>
									<Input
										type="tel"
										placeholder="Phone number"
										{...register('phone')}
										className="w-full"
									/>
									{errors.phone && (
										<p className="mt-1 text-sm px-4 text-red-600">
											{errors.phone.message}
										</p>
									)}
								</label>
							</div>
							{/* select */}
							<Controller
								name="option"
								control={control}
								render={({ field }) => (
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select a service" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Select a service</SelectLabel>
												<SelectItem value="web development">Web Development</SelectItem>
												<SelectItem value="SEO Optimization">Seo Optimization</SelectItem>
												<SelectItem value="web-flow & Shopify">
													Web Flow and Shopify
												</SelectItem>
												<SelectItem value="consultation">
													Consultation
												</SelectItem>
												<SelectItem value="others">Others</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
							{errors.option && (
								<p className="mt-1 text-sm px-2 text-red-600">
									{errors.option.message}
								</p>
							)}
							{/* textarea */}
							<div>
								<Textarea
									className="h-[200px]"
									placeholder="Type your message here"
								/>
								{errors.message && (
									<p className="mt-1 text-sm px-4 text-red-600">
										{errors.message.message}
									</p>
								)}
							</div>

							{submitStatus && !isLoading && (
								<div
									className={`mt-3 text-center ${
										submitStatus.includes('success')
											? 'text-green-400'
											: 'text-red-600'
									}`}
								>
									{submitStatus}
								</div>
							)}
							{/* send message button */}
							<Button
								type="submit"
								size="md"
								className="w-full py-2"
								disabled={isLoading}
							>
								{isLoading ? <Spinner /> : 'Send message'}
							</Button>

						</form>
                        <p className="text-white/60">
                            If {"you're"} interested in working with me or for inquiries, please schedule a
                            meeting with me using the calendar below.
                        </p>

                        {/* Book a call button */}
                        <Button
                            data-cal-namespace="30min"
                            data-cal-link="retrong/30min"
                            data-cal-config='{"layout":"month_view"}'
                            size="md"
                            className="py-2 w-[50%]"
                        >
                            Book a call
                        </Button>
					</div>

					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-6">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[20px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Contact