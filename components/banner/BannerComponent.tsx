import Link from "next/link";
import { FC } from "react";

interface BannerProps {
    image: string;
    text: string;
    onButtonClick: () => void; // Prop para manejar el click
}

export const BannerComponent:FC<BannerProps> = ({image, text, onButtonClick}) => {
    
    return (
        <div 
            className="bannercomponent"
            style={{
                backgroundImage: image
            }}
        >
            <div className="bannercomponent__backgroundblack"></div>
            <div className="bannercomponent__container">
                <div className="bannercomponent__text">
                    {text}
                    <span></span>
                </div>
                <div className="bannercomponent__buttons">
                    <button onClick={onButtonClick} className="bannercomponent__button">
                        RESIDENTIAL SERVICES <span>&gt;</span>
                    </button>
                    <button onClick={onButtonClick} className="bannercomponent__button">
                        COMMERCIAL SERVICES <span>&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}