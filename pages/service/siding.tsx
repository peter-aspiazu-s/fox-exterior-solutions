import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function SidingPage () {

    return(
        <Layout
            title="Siding | Page"
            description="Siding Services"
            keywords="Siding"
        >
            <InfoServices image={"/images/siding.webp"} alt="siding image" />
        </Layout>
    )
}

export default SidingPage;