import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function WindowsDoorsPage () {

    return(
        <Layout
            title="Windows & Doors | Page"
            description="Windows & Doors Services"
            keywords="Windows & Doors"
        >
            <InfoServices image={"/images/windows-doors.webp"} alt="Windows & Doors image" />
        </Layout>
    )
}

export default WindowsDoorsPage;