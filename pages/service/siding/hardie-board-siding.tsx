import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";



const imageArr = [
    {image: "/images/siding2.jpg", alt:"Siding Image"},
    {image: "/images/windows.jpg", alt:"Windows Image"},
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
                // description="Durable and resistant to rot and pests, Hardie plank siding offers the appearance of wood without all the maintenance, making it a popular choice for a timeless look."
                description="Durable and resistant to rot and pests, Hardie plank siding offers the appearance of wood without all the maintenance, making it a popular choice for a timeless look."
                text1="Hardie Board siding installation that combines durability and wood aesthetics."
                text2="Soluciones de revestimiento resistentes a plagas y putrefacción para una belleza duradera"
            />
        </Layout>
    )
}

export default HardieBoardSidingPage;