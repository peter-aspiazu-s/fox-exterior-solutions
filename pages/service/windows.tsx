import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function WindowsDoorsPage () {

    return(
        <Layout
            title="Windows | Page"
            description="Windows Services"
            keywords="Windows"
        >
            <InfoServices title="Professional Siding Company For Quality Services" description="Siding is not just about protection, it's also about aesthetics. At Fox Exterior Solutions, we understand the importance of having siding that not only shields your property from the elements but also enhances its curb appeal." image={"/images/windows-doors.webp"} alt="Windows & Doors image" />
        </Layout>
    )
}

export default WindowsDoorsPage;