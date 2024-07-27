import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";



const imageArr = [
    {image: "/images/gutters-repair.webp", alt:"Gutters Image"},
    {image: "/images/gutters3.webp", alt:"Gutters Image"},
]

function GuttersRepairsPage () {

    return(
        <Layout
            title="Gutters Repairs | Page"
            description="Gutters Repairs Services"
            keywords="Gutters, Gutters Repairs"
        >
            <InfoServices images={imageArr}
                title="Gutters Repairs" 
                description="Gutters play a crucial role in diverting rainwater away from the foundation and roof of your property. If you need to replace old, inefficient gutters or carry out a repair, contact us."  
                text1="Replacing outdated gutters for effective rainwater management."
                text2="Gutter repair services to maintain the structural integrity of your property."    
            />
        </Layout>
    )
}

export default GuttersRepairsPage;