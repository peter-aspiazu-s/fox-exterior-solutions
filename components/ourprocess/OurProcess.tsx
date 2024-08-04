import Image from "next/image";
import { FC } from "react";

export const OurProcess:FC = () => {
    return (
        <div className="ourprocess">
            <div className="ourprocess__container">
                <div className="ourprocess__container-text">
                    <div className="ourprocess__text-title">OUR PROCESS</div>
                    <div className="ourprocess__text-subtitle">Getting started is easy!</div>
                    <div className="ourprocess__text-description">Getting started is as simple as calling or completing our contact form. We will contact you as soon as possible to arrange your free estimate.</div>
                </div>

                <div className="ourprocess__container-card">
                    <div className="ourprocess__card">
                        <div className="ourprocess__card-image">
                            {/* <Image src="/images/men-cell.webp" alt="Image of Man on a phone call" layout="fill" /> */}
                            <img src="/images/men-cell.webp" alt="Image of Man on a phone call" width="100%" height="100%" loading="lazy" />
                        </div>
                        <div className="ourprocess__card-title">Step 1</div>
                        <div className="ourprocess__card-subtitle">Call us or Send us a Message</div>
                        <div className="ourprocess__card-description">Call our office today, and our team will arrange a site inspection to review your project with you.</div>
                    </div>
                    <div className="ourprocess__card">
                        <div className="ourprocess__card-image">
                            {/* <Image src="/images/cafe-calendar.webp" alt="Coffee and calendar" layout="fill" /> */}
                            <img src="/images/cafe-calendar.webp" alt="Coffee and calendar" width="100%" height="100%" loading="lazy" />
                        </div>
                        <div className="ourprocess__card-title">Step 2</div>
                        <div className="ourprocess__card-subtitle">Schedule an Inspection</div>
                        <div className="ourprocess__card-description">During our inspection, our team will visit your home to evaluate and identify the problems you are experiencing.</div>
                    </div>
                    <div className="ourprocess__card">
                        <div className="ourprocess__card-image">
                            {/* <Image src="/images/roofing10.webp" alt="roofing image" layout="fill" /> */}
                            <img src="/images/roofing10.webp" alt="roofing image" width="100%" height="100%" loading="lazy" />
                        </div>
                        <div className="ourprocess__card-title">Step 3</div>
                        <div className="ourprocess__card-subtitle">Get an Estimate</div>
                        <div className="ourprocess__card-description">Our estimates are easy to understand and direct. We don&apos;t like surprises and we promise not to give you any.</div>
                    </div>
                </div>

                <div className="ourprocess__container-button">
                    <a href="tel:+17168286889" className="ourprocess__button">CALL (716) 828-6889</a>
                    <a href="https://wa.link/da3iiu" target="_blank" className="ourprocess__button">MESSAGE US</a>
                </div>
            </div>
        </div>
    )
}