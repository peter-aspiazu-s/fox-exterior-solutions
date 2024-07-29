import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/siding2.jpg", alt:"Siding Image"},
    {image: "/images/windows.jpg", alt:"Windows Image"},
    {image: "/images/siding3.jpg", alt:"Windows Image"}
]

function SidingPage () {

    return(
        <Layout
            title="Siding | Page"
            description="Siding Services"
            keywords="Siding"
        >
            <InfoServices 
                images={imageArr} 
                title="Professional Siding Company For Quality Services"
                description="At Fox Exterior Solutions we understand that siding is not just about protection, but also aesthetics. We value the importance of having siding that not only protects your property from the elements, but also enhances its visual appeal. Whether you want to replace outdated siding or improve the appearance of your home, our siding installation and replacement services are designed around your unique preferences."
                text1="We install coatings that improve the appearance and durability of your home."
                text2="Replacing old coatings with a modern and efficient renovation."
            />
        </Layout>
    )
}

export default SidingPage;