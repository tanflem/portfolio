import Link from 'next/link';
import { FC } from 'react';

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-gray-500 sm:text-xl rounded md:p-0 hover:text-white"
        >
            {title}
        </Link >
    );
}
export default NavLink;