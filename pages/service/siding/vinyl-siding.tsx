import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/siding2.jpg", alt:"Siding Image"},
    {image: "/images/windows.jpg", alt:"Windows Image"},
]

function VinylSidingPage () {

    return(
        <Layout
            title="Vinyl Siding | Page"
            description="Vinyl Siding Services"
            keywords="Siding, Vinyl Siding"
        >
            <InfoServices images={imageArr}
                title="Vinyl Siding"
                description="Versatile and low-maintenance, vinyl siding is available in various colors and styles, providing excellent protection from the elements and long-lasting beauty.
Our experienced team is committed to delivering top-quality siding installation and replacement services that meet your needs and elevate the appearance of your property."
                text1="We install vinyl siding that combines resistance and varied aesthetics."
                text2="Low-maintenance coating solutions for attractive, long-lasting protection."
            />
        </Layout>
    )
}

export default VinylSidingPage;