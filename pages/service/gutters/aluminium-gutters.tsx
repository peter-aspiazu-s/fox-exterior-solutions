import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function AluminiumGuttersPage () {

    return(
        <Layout
            title="Gutters | Page"
            description="Gutters Services"
            keywords="Gutters"
        >
            <InfoServices title="Best Professional Gutter Contractor." description="When it comes to safeguarding your property from water damage, trust Fox Exterior Solutions as your go-to gutter contractor. We pride ourselves on being more than just roofing experts; we're your dedicated partner for all your gutter needs. Our highly skilled team is fully committed to delivering top-quality gutter installation and replacement services." image={"/images/trim-gutters.webp"} alt="Trim & Gutters image" />
        </Layout>
    )
}

export default AluminiumGuttersPage;