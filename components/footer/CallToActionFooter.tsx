import { FC } from "react";
import Link from "next/link";

export const CallToActionFooter: FC = () => {

    return (
        <div className="calltoactionfooter">
            <div className="calltoactionfooter__backgroundblack"></div>
            <div className="calltoactionfooter__container">
                <div className="calltoactionfooter__title">Ready To Get Started?</div>
                <div className="calltoactionfooter__text">Our experienced professionals are happy to meet with you at your convenience to provide you with a free, no-obligation quote and answer any questions you may have about roof repair or installation</div>
                <Link href="/contact" className="sidebar__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link>
            </div>
        </div>
    )
}