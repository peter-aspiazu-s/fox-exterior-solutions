import { FC, ReactNode, useState } from "react";
import Head from "next/head";
import { InfoContactTop } from "@/components/infocontactop/InfoContactTop";
import { HeaderComponent } from "@/components/header/HeaderComponent";
import { Sidebar } from '../components/header/Sidebar';
import { CallToActionFooter } from "@/components/footer/CallToActionFooter";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { CopyWrite } from "@/components/footer/CopyWrite";
import { BannerComponent } from "@/components/banner/BannerComponent";
import { AmountOfWorkDone } from "@/components/amount/AmountOfWorkDone";
import { SectionServices } from "@/components/section/SectionServices";
import { useRouter } from "next/router";


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


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    (router.asPath.split("/")[2] === "windows-doors") ? "url(/images/windows-doors.webp)" 
                    : (router.asPath.split("/")[2] === "roofing") ? "url(/images/roofing.webp)"
                    : (router.asPath.split("/")[2] === "siding") ? "url(/images/siding.webp)"
                    : (router.asPath.split("/")[2] === "decks") ? "url(/images/decks.webp)"
                    : (router.asPath.split("/")[2] === "trim-gutters") ? "url(/images/trim-gutters.webp)"
                    : "url(/images/bannerhome.gif)"
                } 
                
                text={
                    (router.asPath.split("/")[2] === "windows-doors") ? "Windows & Doors Services" 
                    : (router.asPath.split("/")[2] === "roofing") ? "Roofing Services"
                    : (router.asPath.split("/")[2] === "siding") ? "Siding Services"
                    : (router.asPath.split("/")[2] === "decks") ? "Decks Services"
                    : (router.asPath.split("/")[2] === "trim-gutters") ? "Trim & Gutters Services"
                    : "Three Generations Of Roofing & Siding Experience"
                } />

            {
                children
            }

            <AmountOfWorkDone />

            <SectionServices />

            <CallToActionFooter />

            <FooterComponent />

            <CopyWrite />
        </>
    )
}