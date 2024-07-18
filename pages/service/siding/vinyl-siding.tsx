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
                // description="Versatile and low-maintenance, vinyl siding comes in various colors and styles, providing excellent protection against the elements and lasting beauty."
                description="Versatile and low-maintenance, vinyl siding is available in various colors and styles, providing excellent protection from the elements and long-lasting beauty."
                text1="Vinyl siding installation that combines resistance and varied aesthetics"
                text2="Low-maintenance coating solutions for long-lasting, attractive protection"
            />
        </Layout>
    )
}

export default VinylSidingPage;