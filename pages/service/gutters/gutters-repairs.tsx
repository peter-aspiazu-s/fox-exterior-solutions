import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";



const imageArr = [
    {image: "/images/trim-gutters.webp", alt:"Gutters Image"},
    {image: "/images/gutters.webp", alt:"Gutters Image"},
]

function GuttersRepairsPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices images={imageArr}
                title="Gutters Repairs" 
                // description="Gutters plays the most important role in channeling rainwater away from your property's foundation and roof.  Whether you need to replace old, inefficient gutters or want a repair contact us." 
                description="Gutters play a crucial role in diverting rainwater away from the foundation and roof of your property. Whether you need to replace old, inefficient gutters or perform a repair, contact us."  
                text1="Replacing outdated gutters for effective rainwater management"
                text2="Gutter repair services to maintain the structural integrity of your property"    
            />
        </Layout>
    )
}

export default GuttersRepairsPage;