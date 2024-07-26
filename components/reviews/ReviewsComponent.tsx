import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";


const reviews = [
    {
        start: "⭐⭐⭐⭐⭐",
        content: "If you need siding work done, look no further, this is the only company you should reach out to. I needed siding repair done, a project I had been holding off on for a couple years. This company did a great job in all aspects, whether its cost, timeliness, responsiveness, or quality of work. I had almost given up at one point during my research phase because the quotes I was receiving from other companies were super expensive or they kept trying to upsell. Alexis, the gentleman I worked with, didn’t waste my time trying to convince me to do a complete overhaul or trying to sell me more than I need. If I have any future siding work done, this is the only company I’m reaching out to. They’re honest, prompt, and provide phenomenal value.",
        person: "Justin Lee.",
        image: "/images/justin-lee.png"
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "We hired this company to install drywall downstairs. There were some glitches but Alexis took care of them right away. My whole downstairs was done within 10 days wall boarding my ceilings and all the walls the plaster and taping and sanding. We are ready to paint. The also took all the debris from the project. Thank you.",
        person: "Carolyn Boczarski.",
        image: "/images/carolyn-boczarski.png"
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Sean came to my home a few days after I contacted the company.  I got a fair estimate within a few days and in another week he removed my old broken storm door and installed a new door.  He was courteous and professional.  Stephanie Fox was my phone contact for the company and she was helpful and friendly.  I wish all of my contractor experiences were this good.",
        person: "Mitchell B.",
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Called them for an estimate on a new garage door and windows.  Came out to my house within a few days. Walked through the house and Sean gave us his opinion in everything.  We knew we couldn't do everything at once. So we started with the garage door. Made the appointment.  He showed up on time, took less time that he thought.  He did great work and the price was reasonable.  Will definitely be using him again for the windows.",
        person: "Ryan M.",
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Replaced my old storm door that was wrecked in a recent storm. Was very quick to respond after using angi. Stephanie was my contact. She was quick and very friendly. Sean and a fellow worker came today. They removed my old door, and installed the new one what felt like minutes. Door looks great. Very clean and professional. This whole experience has been great. Wish all contractors were this responsive and friendly.",
        person: "Richard A.",
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Sean came out for an estimate Estimate on a new garden window, siding, sliding door, and refinishing the deck. He price was reasonable and affordable and they did such an amazing job on everything. Would definitely recommend them to others and call back if I ever need anything done again.",
        person: "Ryan M.",
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Here is my overall impression: First, Stephanie at the office was very responsive on all matters. Since we are out of town owners, this was very important to us. Second, Sean and Bill did an amazing job on the door installation and clean up. Pictures were taken for our future reference. Will definitely will use them for future work and highly recommend them to others in the area.",
        person: "Mark M.",
    },
    {
        start: "⭐⭐⭐⭐⭐",
        content: "Sean came to my home a few days after I contacted the company.  I got a fair estimate within a few days and in another week he removed my old broken storm door and installed a new door.  He was courteous and professional.  Stephanie Fox was my phone contact for the company and she was helpful and friendly.  I wish all of my contractor experiences were this good.",
        person: "Mitchell B.",
    }
]

export const ReviewsComponent: FC = () => {
    return (
        <div className="reviewscomponent">
            <div className="reviewscomponent__container">
                <div className="reviewscomponent__title">REVIEWS</div>
                <Swiper 
                    autoplay={true}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Navigation]} 
                    className="mySwiper reviewscomponent__swiper"

                >
                    {
                        reviews.map(({start, content, person, image}) => (
                            <SwiperSlide key={content} className="reviewscomponent__swiper-slide">
                                <div className="reviewscomponent__slide-image">
                                    <Image src="/images/comillas.svg" alt="double quotation marks image" layout="fill" />
                                </div>
                                <div className="reviewscomponent__slide-review">
                                    <div>{start}</div>
                                    <div>{`"${content}"`}</div>
                                    <div className="reviewscomponent__slide-review-person">
                                        {image &&
                                            <div className="reviewscomponent__slide-review-image">
                                                <Image src={image} alt="Image person" layout="fill" />
                                            </div>
                                        }
                                        <div className="reviewscomponent__slide-review-text">{person}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}