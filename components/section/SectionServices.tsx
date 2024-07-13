import Link from "next/link";
import { FC } from "react";
import { RightIcon } from './RightIcon';


export const SectionServices:FC = () => {
    return (
        <div className="sectionservices">
            <div className="sectionservices__container">
                <div 
                    className="sectionservices__card"
                    style={{background: "url(/images/image-roofing.webp)"}}
                >
                    <div className="sectionservices__card-backgroundblack"></div>
                    <div className="sectionservices__title">Residential Services</div>
                    <div className="sectionservices__text">Protect your home with high quality materials installed by expert teams with an attention to detail.</div>
                    <div className="sectionservices__list">
                        <Link href="/service/roofing" className="sectionservices__link">Roofing <RightIcon /></Link>
                        <Link href="/service/roofing/metal-roofs" className="sectionservices__link">Metal Roofs <RightIcon /></Link>
                        <Link href="/service/roofing/asphalt-singles" className="sectionservices__link">Asphalt Singles <RightIcon /></Link>
                        <Link href="/service/roofing/solar-shingles" className="sectionservices__link">Solar Shingles <RightIcon /></Link>
                    </div>
                </div>

                <div 
                    className="sectionservices__card"
                    style={{background: "url(/images/image-siding.webp)"}}    
                >
                    <div className="sectionservices__card-backgroundblack"></div>
                    <div className="sectionservices__title">Commercial Services</div>
                    <div className="sectionservices__text">Durable and long-lasting exterior solutions for commercial properties that are efficient and cost-effective.</div>
                    <div className="sectionservices__list">
                        {/* <Link href="/service/roofing" className="sectionservices__link">Flat Root <RightIcon /></Link> */}
                        <Link href="/service/roofing/flat-low-slope-roof-styles" className="sectionservices__link">Flat/Low Slope Roof Styles <RightIcon /></Link>
                        <Link href="/service/siding-windows" className="sectionservices__link">Siding & Windows <RightIcon /></Link>
                        <Link href="/service/siding/vinyl-siding" className="sectionservices__link">Vinyl Siding <RightIcon /></Link>
                        <Link href="/service/siding/metal-siding" className="sectionservices__link">Metal Siding <RightIcon /></Link>
                        <Link href="/service/siding/hardie-board-siding" className="sectionservices__link">Hardie Board Siding <RightIcon /></Link>
                        {/* <Link href="/service/gutters" className="sectionservices__link">Gutters <RightIcon /></Link> */}
                        {/* <Link href="/service/gutters/gutters-repairs" className="sectionservices__link">Gutters Repairs <RightIcon /></Link> */}
                        {/* <Link href="/service/gutters/aluminium-gutters" className="sectionservices__link">Aluminium Gutters <RightIcon /></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}