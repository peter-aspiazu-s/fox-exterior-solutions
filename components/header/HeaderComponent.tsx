import { Dispatch, FC, SetStateAction } from "react";
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
    console.log(router.asPath);
    
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

                            <div className="headercomponent__submenu">
                                {
                                    data.subService?.map((submenu) => (
                                        <Link href={submenu.redirect} key={submenu.redirect}>{submenu.name}</Link>
                                    ))
                                }
                            </div>
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