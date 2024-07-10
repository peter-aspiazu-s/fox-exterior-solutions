import { FC, ReactNode, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { InfoContactTop } from "@/components/infocontactop/InfoContactTop";
import { HeaderComponent } from "@/components/header/HeaderComponent";
import { Sidebar } from '../components/header/Sidebar';
import { CallToActionFooter } from "@/components/footer/CallToActionFooter";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { CopyWrite } from "@/components/footer/CopyWrite";
import { BannerComponent } from "@/components/banner/BannerComponent";
import { AmountOfWorkDone } from "@/components/amount/AmountOfWorkDone";
import { SectionServices } from "@/components/section/SectionServices";


interface LayoutProps {
    title: string;
    description: string;
    keywords: string;
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
    title,
    description,
    keywords,
    children
}) => {

    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionServicesRef = useRef<HTMLDivElement>(null);

    const pathArray = router.asPath.split("/");
    const lastElement = pathArray[pathArray.length - 1];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = () => {
        if (sectionServicesRef.current) {
            sectionServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href="/images/logo.svg" />
            </Head>
            
            <InfoContactTop />

            <HeaderComponent toggleMenu={toggleMenu} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

            <Sidebar toggleMenu={toggleMenu} menuOpen={menuOpen} />

            <BannerComponent 
                image={
                    (lastElement === "siding-windows") ? "url(/images/siding.webp)" 
                    : (lastElement === "roofing") ? "url(/images/roofing.webp)"
                    : (lastElement === "metal-roofs") ? "url(/images/roofing2.jpg)"
                    : (lastElement === "asphalt-singles") ? "url(/images/roofing3.jpg)"
                    : (lastElement === "solar-shingles") ? "url(/images/roofing4.jpg)"
                    : (lastElement === "flat-low-slope-roof-styles") ? "url(/images/roofing5.jpg)"
                    // : (router.asPath.split("/")[2] === "decks") ? "url(/images/decks.webp)"
                    : (lastElement === "gutters") ? "url(/images/trim-gutters.webp)"
                    : "url(/images/bannerhome.gif)"
                } 
                
                text={
                    (router.asPath.split("/")[2] === "siding-windows") ? "Siding & Windows Services" 
                    : (router.asPath.split("/")[2] === "roofing") ? "Roofing Services"
                    // : (router.asPath.split("/")[2] === "decks") ? "Decks Services"
                    : (router.asPath.split("/")[2] === "gutters") ? "Gutters Services"
                    : (router.asPath.split("/")[1] === "contact") ? "Contact"
                    : "At Fox Exterior Solutions, we specialize in asphalt shingle roofing"
                } 
                
                onButtonClick={scrollToSection} // Pasar la función al BannerComponent
            />

            {
                children
            }

            <AmountOfWorkDone />

            <div ref={sectionServicesRef}>
                <SectionServices />
            </div>

            <CallToActionFooter />

            <FooterComponent />

            <CopyWrite />
        </>
    )
}