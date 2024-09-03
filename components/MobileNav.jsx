"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from './Nav';

const MobileNav = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClose = () => {
        router.events.on('routerChangeComplete', () => {
            document.body.classList.remove('sheet-open')
        });
    };


  return (
    <Sheet onClose={handleClose}>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className='mt-28 mb-40 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Bart<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>
            {/* nav links */}
            <nav className='flex flex-col items-center justify-center gap-8'>
                {navLinks.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} hover:text-accent capitalize transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>

        </SheetContent>

    </Sheet>
  )
}

export default MobileNav