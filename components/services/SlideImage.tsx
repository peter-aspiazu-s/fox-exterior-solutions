import { FC } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';


interface Props {
    images: ImageType[];
}

type ImageType = {
    image: string;
    alt: string;
}

export const SlideImage:FC<Props> = ({
    images
}) => {
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