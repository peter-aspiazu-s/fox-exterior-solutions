import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const ProjectsComponent: FC = () => {
    return (
        <div className="projectscomponent">
            <div className="projectscomponent__container">
                <div className="projectscomponent__text">
                    <div className="projectscomponent__text-title">ROOFING PROJECTS</div>
                    <div className="projectscomponent__text-subtitle">Crafting Durable Roofs, Safeguarding Homes</div>
                    <div className="projectscomponent__text-description">Our experienced roofing team leverages decades of expertise to assist you promptly. Whether you need a full roof replacement, regular maintenance, or minor repairs, we are here to support you every step of the way.</div>
                </div>
                <div className="projectscomponent__projects">
                    <div className="projectscomponent__projects-card">
                        <div className="projectscomponent__projects-card-image">
                            <Image src="/images/asphalt-shingles.webp" alt="Roofing image" layout="fill" />
                        </div>
                        <div className="projectscomponent__projects-card-container">
                            <div className="projectscomponent__projects-card-title">Composite Roofs</div>
                            <div className="projectscomponent__projects-card-description">Known for their classic appeal and durability, tile roofs are one of the most in-demand roofing materials today. In addition to offering a wide variety of styles and colors to adapt to any architectural design, these roofs provide excellent resistance to different weather conditions. Opting for Bee Roofing And Exteriors for shingle installation ensures an optimal combination of functionality, durability and cost-effectiveness.</div>
                            <Link href="/contact" className="projectscomponent__projects-card-button">GET STARTED</Link>
                        </div>
                    </div>
                    <div className="projectscomponent__projects-card">
                        <div className="projectscomponent__projects-card-image">
                            <Image src="/images/wood-roof.png" alt="Roofing image" layout="fill" />
                        </div>
                        <div className="projectscomponent__projects-card-container">
                            <div className="projectscomponent__projects-card-title">Wooden roofs</div>
                            <div className="projectscomponent__projects-card-description">Wood ceilings, crafted from split logs to display a natural texture and wood grain appearance, add an unmistakable rustic charm that blends seamlessly with a variety of architectural styles. In addition to their visual appeal, wooden roofs offer notable durability, providing natural insulation that can be up to twice as efficient as that of asphalt shingles, thus contributing to greater energy efficiency.</div>
                            <Link href="/contact" className="projectscomponent__projects-card-button">GET STARTED</Link>
                        </div>
                    </div>
                    <div className="projectscomponent__projects-card">
                        <div className="projectscomponent__projects-card-image">
                            <Image src="/images/metal-roofs2.webp" alt="Roofing image" layout="fill" />
                        </div>
                        <div className="projectscomponent__projects-card-container">
                            <div className="projectscomponent__projects-card-title">Metal Roofs</div>
                            <div className="projectscomponent__projects-card-description">Metal roofs, with their elegant aesthetics and great strength, are quickly becoming a preferred option for homeowners and businesses alike. They stand out for their impressive durability, as they can last more than 50 years with little maintenance, and offer superior resistance to extreme weather conditions, such as heavy rain, snow and even fire. Additionally, metal roofs are eco-friendly as they are typically made from recyclable materials and reflect more solar radiation than asphalt shingles, which can significantly reduce cooling costs.</div>
                            <Link href="/contact" className="projectscomponent__projects-card-button">GET STARTED</Link>
                        </div>
                    </div>
                </div>
                <div className="projectscomponent__box">
                    <div className="projectscomponent__box-title">Ready To Get Started?</div>
                    <div className="projectscomponent__box-description">We are just a phone call or message away. Get your free estimate today.</div>
                    <a href="tel:+17168286889" className="projectscomponent__box-button">CALL (716) 828-6889</a>
                    <a href="https://wa.link/da3iiu" target="_blank" className="projectscomponent__box-link">Message Us</a>
                </div>
            </div>
        </div>
    )
}