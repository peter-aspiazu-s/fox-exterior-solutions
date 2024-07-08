import { FC } from "react";
import Link from "next/link";
import { headerComponentData } from "@/data/layout/headercomponent";

interface sidebarProps {
    toggleMenu: () => void;
    menuOpen: boolean;
}

export const Sidebar: FC<sidebarProps> = ({menuOpen, toggleMenu}) => {

    if(!menuOpen){
        return<></>;
    }

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                {
                    headerComponentData.map((data) => (
                        <Link 
                            href={data.redirect} 
                            key={data.redirect} 
                            className="sidebar__link"
                            onClick={toggleMenu}
                        >
                            {data.name}
                        </Link>
                    ))
                }

                <Link href="/contact" className="sidebar__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}