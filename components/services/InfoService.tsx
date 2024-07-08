import { FC } from "react";
import Link from "next/link";
import Image from 'next/image';

interface InfoProps {
    image: string;
    alt: string;
}

export const InfoServices: FC<InfoProps> = ({image, alt}) => {

    return(
        <div className="infoservices">
            <div className="infoservices__container">
                <div className="infoservices__container-text">
                    <div className="infoservices__title">Residential and Commercial Roofing Contractors You Can Trust</div>
                    <div className="infoservices__description">We've been serving the Buffalo and Rochester areas for over 60 years. Western NY is notorious for lake effect snow and high winds, both of which can damage a roof of inferior quality. If your roof is leaking, has damaged or missing shingles, or if a storm has damaged your roof, we have the experience and knowledge to repair an existing roof or install a new one for you.</div>
                    <div className="infoservices__checkout">
                        <svg id="true-check-accept-approve" version="1.1" viewBox="0 0 15 15" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z"/><polygon points="6.505,8.853 3.861,6.209 3.154,6.916 6.51,10.272 11.856,4.851 11.144,4.149 "/></svg>
                        Residential roofing services that elevate and protect homes
                    </div>
                    <div className="infoservices__checkout">
                        <svg id="true-check-accept-approve" version="1.1" viewBox="0 0 15 15" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z"/><polygon points="6.505,8.853 3.861,6.209 3.154,6.916 6.51,10.272 11.856,4.851 11.144,4.149 "/></svg>
                        Commercial roofing services customized for need and efficiency
                    </div>
                    <Link href="/contact" className="sidebar__getaquote">
                        GET A QUOTE <span>&gt;</span>
                    </Link>
                </div>
                <div className="infoservices__container-image">
                    <Image src={image} alt={alt} layout="fill"/>
                </div>
            </div>
        </div>
    )
}