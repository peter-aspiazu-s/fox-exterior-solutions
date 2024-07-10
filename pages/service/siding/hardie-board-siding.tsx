import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function HardieBoardSidingPage () {

    return(
        <Layout
            title="Siding | Page"
            description="Siding Services"
            keywords="Siding"
        >
            <InfoServices image={"/images/siding.webp"} alt="siding image" 
                title="Professional Siding Company For Quality Services"
                description="Siding is not just about protection, it's also about aesthetics. At Fox Exterior Solutions, we understand the importance of having siding that not only shields your property from the elements but also enhances its curb appeal. Whether you're seeking to replace outdated siding or want to upgrade the look of your home, our siding installation and replacement services are tailored to your unique preferences."
            />
        </Layout>
    )
}

export default HardieBoardSidingPage;