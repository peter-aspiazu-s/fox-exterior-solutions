import { Dispatch, FC, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
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

    const router = useRouter();
    
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
                        <div className="headercomponent__menu" key={data.redirect} >
                            <Link 
                                href={data.redirect} 
                                className={
                                    `headercomponent__menu-items-link
                                    ${(router.asPath === data.redirect) ? "animation-menu" : ""}`
                                }
                            >{data.name.toLocaleUpperCase()}</Link>

                            {/* {
                                data.subService && <svg onClick={() => setSubmenu(!submenu)} 
                                xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                className={submenu ? "ico-rotate" : "ico-norotate"}
                                >
                                    <path d="M1.5 0l-1.5 1.5 4 4 4-4-1.5-1.5-2.5 2.5-2.5-2.5z" transform="translate(0 1)" />
                                </svg>
                            } */}

                            {data.subService && (
                                <div className="headercomponent__submenu">
                                    {data.subService.map((submenu) => (
                                        <Link href={submenu.redirect} key={submenu.redirect}
                                            className="headercomponent__submenu-link"
                                        >
                                            {submenu.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <Link href="/contact" className="headercomponent__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}