import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function GuttersRepairsPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices 
                title="Gutters Repairs" 
                description="Gutters plays the most important role in channeling rainwater away from your property's foundation and roof.  Whether you need to replace old, inefficient gutters or want a repair contact us." image={"/images/trim-gutters.webp"} alt="Trim & Gutters image" 
                text1="Replacing outdated gutters for effective rainwater management"
                text2="Gutter repair services to maintain the structural integrity of your property"    
            />
        </Layout>
    )
}

export default GuttersRepairsPage;