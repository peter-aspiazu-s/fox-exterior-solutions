import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function AluminiumGuttersPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices 
                title="Aluminium Gutters" 
                description="Lightweight and rust-resistant, aluminum gutters are popular due to their durability and low maintenance." image={"/images/trim-gutters.webp"} alt="Trim & Gutters image" 
                text1="Installation of aluminum gutters that combine resistance and ease of maintenance"
                text2="Durable, lightweight gutter solutions for reliable protection"
            />
        </Layout>
    )
}

export default AluminiumGuttersPage;