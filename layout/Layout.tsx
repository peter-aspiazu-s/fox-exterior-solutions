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
import { SectionServices } from "@/components/section/SectionServices";
import { WhatsAppButton } from "@/components/whatsappbutton/WhatsAppButtom";
import { BrandsComponent } from "@/components/brands/BrandsComponent";


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

            {(lastElement !== "contact") && <BannerComponent 
                image={
                    (lastElement === "siding-windows") ? "url(/images/siding.webp)" 
                    : (lastElement === "vinyl-siding") ? "url(/images/siding.webp)"
                    : (lastElement === "metal-siding") ? "url(/images/siding.webp)"
                    : (lastElement === "hardie-board-siding") ? "url(/images/siding.webp)"
                    : (lastElement === "roofing") ? "url(/images/roofing.webp)"
                    : (lastElement === "metal-roofs") ? "url(/images/roofing2.jpg)"
                    : (lastElement === "asphalt-singles") ? "url(/images/roofing3.jpg)"
                    : (lastElement === "solar-shingles") ? "url(/images/roofing4.jpg)"
                    : (lastElement === "flat-low-slope-roof-styles") ? "url(/images/roofing5.jpg)"
                    : (lastElement === "gutters") ? "url(/images/trim-gutters.webp)"
                    : (lastElement === "gutters-repairs") ? "url(/images/trim-gutters.webp)"
                    : (lastElement === "aluminium-gutters") ? "url(/images/trim-gutters.webp)"
                    : (lastElement === "maintenance") ? "url(/images/maintenance.webp)"
                    : "url(/images/bannerhome.gif)"
                } 
                
                text={
                    (lastElement === "siding-windows") ? "Siding & Windows Services" 
                    : (lastElement === "vinyl-siding") ? "Vinyl Siding"
                    : (lastElement === "metal-siding") ? "Metal Siding"
                    : (lastElement === "hardie-board-siding") ? "Hardie Board Siding"
                    : (lastElement === "roofing") ? "Roofing Services"
                    : (lastElement === "metal-roofs") ? "Metal Roofs"
                    : (lastElement === "asphalt-singles") ? "Asphalt Singles"
                    : (lastElement === "solar-shingles") ? "Solar Shingles"
                    : (lastElement === "flat-low-slope-roof-styles") ? "Flat Low Slope Roof Styles"
                    : (lastElement === "gutters") ? "Gutters Services"
                    : (lastElement === "gutters-repairs") ? "Gutters Repairs"
                    : (lastElement === "aluminium-gutters") ? "Aluminium Gutters"
                    : (lastElement === "maintenance") ? "Maintenance"
                    : (lastElement === "contact") ? "Contact"
                    // : "At Fox Exterior Solutions, we specialize in asphalt shingle roofing"
                    : "AQUÍ VA EL SLOGAN"
                } 
                
                onButtonClick={scrollToSection} // Pasar la función al BannerComponent
            />}

            {
                children
            }

            {/* <AmountOfWorkDone /> */}
            

            {
                (lastElement !== "contact")
                && <div ref={sectionServicesRef}>
                <SectionServices />
            </div>
            }

            {
                (lastElement === "siding-windows") ? <></> 
                : (lastElement === "vinyl-siding") ? <></>
                : (lastElement === "metal-siding") ? <></>
                : (lastElement === "hardie-board-siding") ? <></>
                : (lastElement === "roofing") ? <></>
                : (lastElement === "metal-roofs") ? <></>
                : (lastElement === "asphalt-singles") ? <></>
                : (lastElement === "solar-shingles") ? <></>
                : (lastElement === "flat-low-slope-roof-styles") ? <></>
                : (lastElement === "gutters") ? <></>
                : (lastElement === "gutters-repairs") ? <></>
                : (lastElement === "aluminium-gutters") ? <></>
                : (lastElement === "contact") ? <></>
                :<BrandsComponent />
            }

            {
                (lastElement === "contact") 
                ? <></> 
                :<CallToActionFooter />
            }


            <FooterComponent />

            <CopyWrite />

            <WhatsAppButton />
        </>
    )
}