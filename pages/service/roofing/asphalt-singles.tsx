import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/roofing1.jpg", alt:"Roofing Image"},
    {image: "/images/roofing2.jpg", alt:"Roofing Image"},
    {image: "/images/roofing3.jpg", alt:"Roofing Image"},
    {image: "/images/roofing4.jpg", alt:"Roofing Image"},
    {image: "/images/roofing5.jpg", alt:"Roofing Image"},
    {image: "/images/roofing6.jpg", alt:"Roofing Image"},
    {image: "/images/roofing7.jpg", alt:"Roofing Image"},
    {image: "/images/roofing8.jpg", alt:"Roofing Image"},
    {image: "/images/roofing9.jpg", alt:"Roofing Image"},
]

function AsphaltSinglesPage () {

    return(
        <Layout
            title="Asphalt Singles | Page"
            description="Asphalt Singles Services"
            keywords="Roofing, Asphalt Singles"
        >
            <InfoServices images={imageArr}
                title="Asphalt Singles."
                // description="Asphalt shingles are among the most popular roofing materials due to their cost-effectiveness and ease of installation. They come in a variety of colors and styles, and they're designed to withstand varying weather conditions. With proper installation and maintenance, asphalt shingles can last up to 25 years or more."
                description="Asphalt shingles are one of the most popular roofing materials due to their cost-effectiveness and ease of installation. They are available in a variety of colors and styles, and are designed to withstand various weather conditions. With proper installation and maintenance, asphalt shingles can last up to 25 years or more."
                text1="Installation of asphalt shingles that combine profitability and climate resistance"
                text2="Replacing shingles with durable and aesthetically varied options"
            />
        </Layout>
    )
}

export default AsphaltSinglesPage;