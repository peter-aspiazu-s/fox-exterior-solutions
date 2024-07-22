import { FC } from "react";
import Link from "next/link";
import { FormComponent } from "../contact/FormComponent";

export const CallToActionFooter: FC = () => {

    return (
        <div className="calltoactionfooter">
            <div className="calltoactionfooter__backgroundblack"></div>
            <div className="calltoactionfooter__container">
                <div className="calltoactionfooter__title">Get in contact with us!</div>
                <div className="calltoactionfooter__text">Our experts are available to meet with you and offer you a free, no-obligation quote. We&apos;re here to answer any questions you may have about roof repair or installation.</div>
                {/* <Link href="/contact" className="sidebar__getaquote">
                    GET A QUOTE <span>&gt;</span>
                </Link> */}
                <FormComponent text />
            </div>
        </div>
    )
}