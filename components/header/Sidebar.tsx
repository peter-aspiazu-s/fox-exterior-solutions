import { FC, useState } from "react";
import Link from "next/link";
import { headerComponentData } from "@/data/layout/headercomponent";

interface sidebarProps {
    toggleMenu: () => void;
    menuOpen: boolean;
}

export const Sidebar: FC<sidebarProps> = ({menuOpen, toggleMenu}) => {


    const [submenu, setSubmenu] = useState(false);

    if(!menuOpen){
        return<></>;
    }

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                {
                    headerComponentData.map((data) => (
                        <>
                            <div className="sidebar__menu">
                                <Link 
                                    href={data.redirect} 
                                    key={data.redirect} 
                                    className="sidebar__link"
                                    onClick={toggleMenu}
                                >
                                    {data.name}
                                </Link>
                                {
                                    data.subService && <svg onClick={() => setSubmenu(!submenu)} 
                                    xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                    className={submenu ? "ico-rotate" : "ico-norotate"}
                                    >
                                    <path d="M1.5 0l-1.5 1.5 4 4 4-4-1.5-1.5-2.5 2.5-2.5-2.5z" transform="translate(0 1)" />
                                </svg>
                                }
                            </div>
                            <div className={`sidebar__submenu ${submenu ? "submenu-visible" : "submenu-unvisible"}`}>
                                {
                                    data.subService?.map((submenu) => (
                                        <Link 
                                            href={submenu.redirect} 
                                            key={submenu.redirect}
                                            className="sidebar__submenu-link"
                                        >{submenu.category} {submenu.name}</Link>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }

                <Link href="/contact" className="sidebar__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}