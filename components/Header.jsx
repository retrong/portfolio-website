import Link from 'next/link';
import React from 'react';

// components
import Image from 'next/image';
import MobileNav from './MobileNav';
import Nav from './Nav';
import { Button } from './ui/button';

const Header = () => {
  return (
		<header className="py-4 xl:py-2 my-8 px-4 text-white w-full">
			<div className="container mx-auto lg:w-[60%] w-full flex justify-between gap-12 py-2 lg:pl-12 pl-4 items-center rounded-full lg:bg-accent/30 bg-none ">
				{/* logo */}
				<Link href="/" className="relative">
					<h1 className="xl:text-2xl text-4xl font-semibold relative">
						Bart<span className="text-accent">.</span>
					</h1>
				</Link>
				{/* desktop nav */}
				<div className="hidden xl:flex items-center gap-14">
					<Nav />
					<Link href="/contact">
						<Button className="">Hire me</Button>
					</Link>
				</div>

				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
}

export default Header