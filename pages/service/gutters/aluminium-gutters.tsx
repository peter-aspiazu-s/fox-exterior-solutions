import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/trim-gutters.webp", alt:"Gutters Image"},
    {image: "/images/gutters.webp", alt:"Gutters Image"},
]

function AluminiumGuttersPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices images={imageArr}
                title="Aluminium Gutters" 
                // description="Lightweight and rust-resistant, aluminum gutters are popular due to their durability and low maintenance." 
                description="Lightweight and rust-resistant, aluminum gutters are popular for their durability and low maintenance." 
                text1="Installation of aluminum gutters that combine resistance and ease of maintenance"
                text2="Durable, lightweight gutter solutions for reliable protection"
            />
        </Layout>
    )
}

export default AluminiumGuttersPage;