import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function MetalRoofsPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing2.jpg"} alt="roofing image"
                title="Metal Roofs."
                description="Metal roofs are known for their durability, with a potential lifespan of 50 years or more. They are resistant to extreme weather conditions and can even enhance energy efficiency by reflecting solar radiant heat. Available in sheets or tiles, metal roofing offers a sleek, modern look to any property"
            />
        </Layout>
    )
}

export default MetalRoofsPage;