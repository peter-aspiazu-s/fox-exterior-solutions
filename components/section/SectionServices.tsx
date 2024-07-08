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
                        <Link href="/service/siding" className="sectionservices__link">Siding <RightIcon /></Link>
                        <Link href="/service/windows&doors" className="sectionservices__link">Windows & Doors <RightIcon /></Link>
                        <Link href="/service/decking" className="sectionservices__link">Decking <RightIcon /></Link>
                        <Link href="/service/trim&gutters" className="sectionservices__link">Trim & Gutters <RightIcon /></Link>
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
                        <Link href="/service/roofing" className="sectionservices__link">Roofing <RightIcon /></Link>
                        <Link href="/service/siding" className="sectionservices__link">Siding <RightIcon /></Link>
                        <Link href="/service/windows&doors" className="sectionservices__link">Windows & Doors <RightIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}