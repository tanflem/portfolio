import NavLink from "./NavLink";
import { FC } from 'react';

interface MenuOverlayProps {
    links: {
        path: string;
        title: string;
    }[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
