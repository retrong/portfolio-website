import Link from 'next/link';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "github.com/retrong" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/retrong/" },
  { icon: <FaTwitter />, path: "https://x.com/just_bart__" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/just_bart___/" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials