import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";



const imageArr = [
    {image: "/images/hardie-board-siding.webp", alt:"Hardie Board Siding Image"},
    {image: "/images/hardie-board-siding2.webp", alt:"Hardie Board Siding Image"},
    {image: "/images/hardie-board-siding3.jpg", alt:"Hardie Board Siding Image"},
    {image: "/images/hardie-board-siding4.jpg", alt:"Hardie Board Siding Image"},
    {image: "/images/hardie-board-siding5.jpg", alt:"Hardie Board Siding Image"}
]

function HardieBoardSidingPage () {

    return(
        <Layout
            title="Hardie Board Siding | Page"
            description="Hardie Board Siding Services"
            keywords="Siding, Hardie Board Siding"
        >
            <InfoServices images={imageArr} 
                title="Hardie Board Siding"
                description="Durable and resistant to rot and pests, Hardie plank siding offers the look of wood without all the maintenance, making it a popular choice for a timeless look. James Hardie siding for its renowned durability and beauty. As certified installers, we ensure your James Hardie siding is installed perfectly."
                text1="We install Hardie Board siding that combines durability and wood aesthetics."
                text2="Pest and rot resistant siding solutions for long-lasting beauty."
            />
        </Layout>
    )
}

export default HardieBoardSidingPage;