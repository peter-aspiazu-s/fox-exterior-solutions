import Link from "next/link";

export const MisionVision = () => {

    return (
        <div className="misionvision">
            <div className="misionvision__container">
                <div className="misionvision__our-text">
                    <div className="misionvision__our-container">
                        <div className="misionvision__title">Mission</div>
                        <div className="misionvision__text">Be the construction solution for your residential and commercial properties. We specialize in asphalt shingle roofs, metal roofs, solar roofs, low-slope commercial roofs among others. Additionally, we provide siding, window, gutter, and roof maintenance and inspection services. Our team is committed to delivering high-quality services that guarantee the protection, energy efficiency and aesthetics of each property.</div>
                    </div>
                    <div className="misionvision__our-container">
                        <div className="misionvision__title">Vision</div>
                        <div className="misionvision__text">To be the leading roofing and construction solutions company in Western New York, recognized for our innovation, quality and sustainability. Continuously innovate our services by adopting advanced and sustainable technologies, to offer solutions that not only protect and beautify properties, but also increase their energy efficiency and durability. We want to be our clients&apos; first choice by offering exceptional service and long-lasting relationships based on trust and excellence.</div>
                    </div>
                </div>
                <div className="misionvision__our-button">
                    <Link href="/contact" className="misionvision__button">
                        GET A QUOTA <span>&gt;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}