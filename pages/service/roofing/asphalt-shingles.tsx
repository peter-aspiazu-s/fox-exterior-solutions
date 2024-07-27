import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/asphalt-shingles.webp", alt:"Asphalt Shingles Image"},
    {image: "/images/asphalt-shingles2.webp", alt:"Asphalt Shingles Image"},
    {image: "/images/asphalt-shingles3.webp", alt:"Asphalt Shingles Image"}
]

function AsphaltSinglesPage () {

    return(
        <Layout
            title="Asphalt Shingles | Page"
            description="Asphalt Shingles Services"
            keywords="Roofing, Asphalt Shingles"
        >
            <InfoServices images={imageArr}
                title="Asphalt Shingles."
                description="Asphalt shingles are one of the most popular roofing materials due to their cost-effectiveness and ease of installation.  They are available in a variety of colors and styles and are designed to withstand various weather conditions. With proper installation and maintenance, asphalt shingles can last up to 25 years or more. 
Fox Exterior has Certificates, licenses and insurance, as well as a professional installation team, as well as an agent who will help and assist you in your project from the beginning and during the process to obtain your new roof."
                text1="We install asphalt shingles that combine profitability and climate resistance."
                text2="Replacing shingles with durable and aesthetically varied options."
            />
        </Layout>
    )
}

export default AsphaltSinglesPage;