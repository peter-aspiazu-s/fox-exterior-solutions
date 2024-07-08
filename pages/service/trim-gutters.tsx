import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function TrimGuttersPage () {

    return(
        <Layout
            title="Trim & Gutters | Page"
            description="Trim & Gutters Services"
            keywords="Trim & Gutters"
        >
            <InfoServices image={"/images/trim-gutters.webp"} alt="Trim & Gutters image" />
        </Layout>
    )
}

export default TrimGuttersPage;