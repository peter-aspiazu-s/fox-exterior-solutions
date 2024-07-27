import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/gutters.webp", alt:"Gutters Image"},
    {image: "/images/gutters2.webp", alt:"Gutters Image"},
    {image: "/images/gutters3.webp", alt:"Gutters Image"},
]

function TrimGuttersPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices images={imageArr}
                title="Best Professional Gutter Contractor." 
                description="When it comes to protecting your property from water damage, trust Fox Exterior Solutions as your go-to gutter contractor. We pride ourselves on being more than just roofing experts; We are your dedicated partner for all your gutter needs. Our highly qualified team is fully committed to providing high-quality gutter installation and replacement services." 
                text1="We install gutters for effective protection against water damage."
                text2="We replace worn gutters with a more efficient drainage system."
                />
        </Layout>
    )
}

export default TrimGuttersPage;