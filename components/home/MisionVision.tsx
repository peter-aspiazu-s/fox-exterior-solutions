import Link from "next/link";

export const MisionVision = () => {

    return (
        <div className="misionvision">
            <div className="misionvision__container">
                <div className="misionvision__our-text">
                    <div className="misionvision__our-container">
                        <div className="misionvision__title">Mission</div>
                        <div className="misionvision__text">At Fox Exterior Solutions, we offer complete roofing and exterior solutions for residential and commercial properties in Buffalo and Western New York. We specialize in asphalt shingle roofs, metal roofs, solar roofs, low-slope commercial roofs, and EPDM and TPO roofs. Additionally, we provide siding, window, gutter, and roof maintenance and inspection services. Our team is committed to delivering high-quality services that guarantee the protection, energy efficiency and aesthetics of each property.</div>
                    </div>
                    <div className="misionvision__our-container">
                        <div className="misionvision__title">Vision</div>
                        <div className="misionvision__text">Our vision is to be the leading roofing and exterior solutions company in Western New York, recognized for our innovation, quality and commitment to sustainability. We aim to continually improve our services by adopting advanced technologies and sustainable practices, to offer solutions that not only protect and beautify properties, but also increase their energy efficiency and durability. We want to be our clients&apos; first choice by offering exceptional service and building lasting relationships based on trust and excellence.</div>
                    </div>
                </div>
                <div className="misionvision__our-button">
                    <Link href="/" className="bannercomponent__button">
                        GET A QUOTA <span>&gt;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}