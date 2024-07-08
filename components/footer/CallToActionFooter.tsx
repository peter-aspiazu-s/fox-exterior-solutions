import { FC } from "react";
import Link from "next/link";

export const CallToActionFooter: FC = () => {

    return (
        <div className="calltoactionfooter">
            <div className="calltoactionfooter__backgroundblack"></div>
            <div className="calltoactionfooter__container">
                <div className="calltoactionfooter__title">Ready To Get Started?</div>
                <div className="calltoactionfooter__text">Our expert team can help with the planning, material choices, and professional installation for your home improvement project. We offer free estimates and require no money down!</div>
                <Link href="/contact" className="sidebar__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}