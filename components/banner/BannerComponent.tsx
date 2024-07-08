import Link from "next/link";
import { FC } from "react";

interface BannerProps {
    image: string;
    text: string;
}

export const BannerComponent:FC<BannerProps> = ({image, text}) => {
    
    return (
        <div 
            className="bannercomponent"
            style={{
                background: image
            }}
        >
            <div className="bannercomponent__backgroundblack"></div>
            <div className="bannercomponent__container">
                <div className="bannercomponent__text">
                    {text}
                    <span></span>
                </div>
                <div className="bannercomponent__buttons">
                    <Link href="/" className="bannercomponent__button">
                        RESIDENTIAL SERVICES <span>&gt;</span>
                    </Link>
                    <Link href="/" className="bannercomponent__button">
                        COMMERCIAL SERVICES <span>&gt;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}