import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function VinylSidingPage () {

    return(
        <Layout
            title="Siding | Page"
            description="Siding Services"
            keywords="Siding"
        >
            <InfoServices image={"/images/siding.webp"} alt="siding image" 
                title="Vinyl Siding"
                description="Versatile and low-maintenance, vinyl siding comes in various colors and styles, providing excellent protection against the elements and lasting beauty."
                text1="Vinyl siding installation that combines resistance and varied aesthetics"
                text2="Low-maintenance coating solutions for long-lasting, attractive protection"
            />
        </Layout>
    )
}

export default VinylSidingPage;