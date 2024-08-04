import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const BrandsComponent: FC = () => {
    return (
        <div className="brandscomponent">
            <div className="brandscomponent__container">
                <div className="brandscomponent__title">Our Preferred Brands at FOX EXTERIOR SOLUTIONS</div>
                <div className="brandscomponent__container-img">
                    <Link target="_blank" href="https://www.owenscorning.com/en-us" className="brandscomponent__img">
                        {/* <Image src="/images/owens-corning.webp" alt="Owens Corning Logo" layout="fill" /> */}
                        <img src="/images/owens-corning.webp" alt="Owens Corning Logo" width="100%" height="100%" loading="lazy" />
                    </Link>
                    <Link target="_blank" href="https://www.gaf.com/" className="brandscomponent__img">
                        {/* <Image src="/images/gaf.webp" alt="Gaf Logo" layout="fill" /> */}
                        <img src="/images/gaf.webp" alt="Owens Corning Logo" width="100%" height="100%" loading="lazy" />
                    </Link>
                    <Link target="_blank" href="https://www.certainteed.com/" className="brandscomponent__img">
                        {/* <Image src="/images/certainteed.png" alt="Certainteed Logo" layout="fill" /> */}
                        <img src="/images/certainteed.png" alt="Owens Corning Logo" width="100%" height="100%" loading="lazy" />
                    </Link>
                </div>
            </div>
        </div>
    )
}