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

function MetalRoofsPage () {

    return(
        <Layout
            title="Metal Roofs | Page"
            description="Metal Roofs Services"
            keywords="Roofing, Metal Roofs"
        >
            <InfoServices images={imageArr}
                title="Metal Roofs"
                // description="Metal roofs are known for their durability, with a potential lifespan of 50 years or more. They are resistant to extreme weather conditions and can even enhance energy efficiency by reflecting solar radiant heat. Available in sheets or tiles, metal roofing offers a sleek, modern look to any property"
                description="Metal roofs stand out for their exceptional durability, with a useful life that can exceed 50 years. They are resistant to extreme weather conditions and can improve energy efficiency by reflecting radiant solar heat. Available in sheets or tiles, metal roofs add a sleek, contemporary look to any property."
                text1="Installation of metal roofs that resist extreme weather and increase energy efficiency"
                text2="Replacing Roofs with Modern, Long-Lasting Metal Options"
            />
        </Layout>
    )
}

export default MetalRoofsPage;