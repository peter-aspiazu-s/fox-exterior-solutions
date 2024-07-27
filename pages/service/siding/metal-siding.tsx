import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/metal-siding.webp", alt:"Metal Siding Image"},
    {image: "/images/metal-siding2.webp", alt:"Metal Siding Image"},
]

function MetalSidingPage () {

    return(
        <Layout
            title="Metal Siding | Page"
            description="Metal Siding Services"
            keywords="Siding, Metal Siding"
        >
            <InfoServices images={imageArr}
                title="Metal Siding"
                description="Sleek and modern, metal siding is known for its durability and resistance to fire and pests, making it a great choice for commercial properties. metal siding offers durability, longevity, and design versatility, making it a popular choice for various commercial buildings. Our expert team help building owners and property managers choose the best material for the project and provide a long-lasting professional installation."
                text1="We install metal siding that combines contemporary style and exceptional resistance."
                text2="Durable, fire-resistant cladding solutions for commercial properties."
            />
        </Layout>
    )
}

export default MetalSidingPage;