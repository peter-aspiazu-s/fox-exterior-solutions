import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerComponentData } from "@/data/layout/headercomponent";

interface headerComponentProps {
    toggleMenu: () => void;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    menuOpen: boolean;
}

export const HeaderComponent: FC<headerComponentProps> = ({
    toggleMenu,
    setMenuOpen,
    menuOpen
}) => {

    
    
    return (
        <div className="headercomponent">
            <div className="headercomponent__container">
                <Link 
                    href="/" 
                    className="headercomponent__logo"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image src="/images/logo.svg" alt="Logo Fox Exterior Solutions" layout="fill" />
                </Link>
                <div 
                    className={`headercomponent__ico-menu ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="headercomponent__hamburger-menu">
                        <span className={menuOpen ? 'open' : ''}></span>
                        <span className={menuOpen ? 'open' : ''}></span>
                        <span className={menuOpen ? 'open' : ''}></span>
                    </div>
                </div>
                <div className="headercomponent__menu-items">
                    {headerComponentData.map((data) => (
                        <Link href={data.redirect} key={data.redirect} className="headercomponent__menu-items-link">{data.name.toLocaleUpperCase()}</Link>
                    ))}
                </div>
                <Link href="/contact" className="headercomponent__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}