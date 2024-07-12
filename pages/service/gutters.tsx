import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function TrimGuttersPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices 
                title="Best Professional Gutter Contractor." 
                description="When it comes to safeguarding your property from water damage, trust Fox Exterior Solutions as your go-to gutter contractor. We pride ourselves on being more than just roofing experts; we're your dedicated partner for all your gutter needs. Our highly skilled team is fully committed to delivering top-quality gutter installation and replacement services." image={"/images/trim-gutters.webp"} alt="Trim & Gutters image" 
                text1="Installing gutters for effective protection against water damage"
                text2="Replacing worn gutters for a more efficient drainage system"
                />
        </Layout>
    )
}

export default TrimGuttersPage;