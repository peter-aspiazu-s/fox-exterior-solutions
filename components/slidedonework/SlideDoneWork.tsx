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
        image: "/images/workdone1.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone2.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone3.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone4.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone5.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone6.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone7.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone8.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone9.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone10.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone11.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone12.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone13.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone14.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone15.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone16.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone17.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone18.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone19.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone20.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone21.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone22.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone23.jpg",
        alt: "Work Done"
    },
    {
        image: "/images/workdone24.jpg",
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
                        <SwiperSlide key={image}><Image src={image} alt={alt} layout='fill' /></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}