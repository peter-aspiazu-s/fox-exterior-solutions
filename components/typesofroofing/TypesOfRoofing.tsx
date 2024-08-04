import Image from "next/image";
import { FC } from "react";

export const TypesOfRoofing: FC = () => {
    return (
        <div className="typesofroofing">
            <div className="typesofroofing__container">
                <div className="typesofroofing__title">Types Of Roofing</div>
                <div className="typesofroofing__description">At Fox Exterior Solutions, our expertise encompasses a wide range of roof types, ensuring that no matter your roofing needs, we have you covered.</div>
                <div className="typesofroofing__container-types">
                    <div className="typesofroofing__type">
                        <div className="typesofroofing__type-title">Metal Roofs</div>
                        <div className="typesofroofing__type-description">Whether it&apos;s installation, restoration, or maintenance, FOX Exterior excels in metal roofing services. Experience the benefits of a sleek, durable, and energy-efficient metal roof backed by our quelity workmanship.</div>
                        <div className="typesofroofing__type-image">
                            <img src="/images/metal-roofs-graphic.webp" alt="Metal Roofs image" width="100%" height="100%" loading="lazy" />
                        </div>
                    </div>
                    <div className="typesofroofing__type">
                        <div className="typesofroofing__type-title">Asphalt Shingles</div>
                        <div className="typesofroofing__type-description">We specialize in installing, repairing, and maintaning asphalt shingle roofs. Our team&apos;s precision and attention to detail guarantee a durable and aesthetically pleasing solution for your property.</div>
                        <div className="typesofroofing__type-image">
                            <img src="/images/asphalt-shingles-graphic.webp" alt="Asphalt Shingles image" width="100%" height="100%" loading="lazy" />
                        </div>
                    </div>
                    <div className="typesofroofing__type">
                        <div className="typesofroofing__type-title">Flat Roofs</div>
                        <div className="typesofroofing__type-description">Trust FOX Exterior for expert flat root solutions that address unique challenges. Our experienced professionals ensure proper drainage and effective sealing, enchancing the longevity of your flat roof.</div>
                        <div className="typesofroofing__type-image">
                            <img src="/images/flat-roofs.webp" alt="Flat Roofs image" width="100%" height="100%" loading="lazy" />
                        </div>
                    </div>
                    <div className="typesofroofing__type">
                        <div className="typesofroofing__type-title">Rubber Roofs</div>
                        <div className="typesofroofing__type-description">Count on FOX Exterior expertise to handie your rubber roofing needs with care. Our team is well-versed in the specific requirements of rubber roofs, ensuring reliable protection against the elements.</div>
                        <div className="typesofroofing__type-image">
                            <img src="/images/rubber-roofs.webp" alt="Rubber Roofs image" width="100%" height="100%" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}