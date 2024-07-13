import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/siding2.jpg", alt:"Siding Image"},
    {image: "/images/windows.jpg", alt:"Windows Image"},
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
                // description="Siding is not just about protection, it's also about aesthetics. At Fox Exterior Solutions, we understand the importance of having siding that not only shields your property from the elements but also enhances its curb appeal. Whether you're seeking to replace outdated siding or want to upgrade the look of your home, our siding installation and replacement services are tailored to your unique preferences."
                description="At Fox Exterior Solutions we understand that siding is not only about protection, but also aesthetics. We value the importance of having siding that not only protects your property from the elements, but also enhances its visual appeal. Whether you want to replace outdated siding or improve the appearance of your home, our siding installation and replacement services are designed around your unique preferences."
                text1="Installation of coatings that improve the appearance and durability of your home"
                text2="Replacing old coatings for a modern and efficient renovation"
            />
        </Layout>
    )
}

export default SidingPage;