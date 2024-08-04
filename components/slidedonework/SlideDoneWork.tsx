import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


const images = [
    {
        image: "/images/workdone1.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone2.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone3.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone4.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone5.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone6.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone7.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone8.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone9.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone10.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone11.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone12.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone13.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone14.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone15.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone16.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone17.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone18.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone19.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone20.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone21.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone22.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone23.webp",
        alt: "Work Done"
    },
    {
        image: "/images/workdone24.webp",
        alt: "Work Done"
    },
]


export const SlideDoneWork = () => {
    return (
        <>
            <Swiper 
                autoplay={true}
                modules={[Autoplay]} 
                className="mySwiper"

            >
                {
                    images.map(({image, alt}) => (
                        <SwiperSlide key={image}><img src={image} alt={alt} width="100%" height="100%" loading="lazy" /></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}