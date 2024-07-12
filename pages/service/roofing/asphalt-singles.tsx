import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function AsphaltSinglesPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing3.jpg"} alt="roofing image"
                title="Asphalt Singles."
                description="Asphalt shingles are among the most popular roofing materials due to their cost-effectiveness and ease of installation. They come in a variety of colors and styles, and they're designed to withstand varying weather conditions. With proper installation and maintenance, asphalt shingles can last up to 25 years or more."
                text1="Installation of asphalt shingles that combine profitability and climate resistance"
                text2="Replacing shingles with durable and aesthetically varied options"
            />
        </Layout>
    )
}

export default AsphaltSinglesPage;