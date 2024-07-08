import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function RoofingPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing.webp"} alt="roofing image" />
        </Layout>
    )
}

export default RoofingPage;