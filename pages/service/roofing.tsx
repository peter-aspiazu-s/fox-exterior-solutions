import { Layout } from "@/layout/Layout";
import { InfoServices } from "@/components/services/InfoService";
import { TypesOfRoofing } from "@/components/typesofroofing/TypesOfRoofing";

function RoofingPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing1.jpg"} alt="roofing image"
                title="Roofing Services in Buffalo NY."
                description="At Fox Exterior Solutions, we specialize in asphalt shingle roofing. As your trusted contractor, our experienced team is dedicated to delivering high-quality asphalt shingle roofing services backed by years of expertise in the industry. 
                If you&apos;re currently looking for Buffalo roofers or roofing companies near western upstate New York, Fox Exterior Solutions is here to help. Our experienced professionals are happy to meet with you at your convenience to provide you with a free, no-obligation quote and answer any questions you may have about roof repair or installation"
                text1="Residential roofing services that improve and protect homes"
                text2="Commercial roofing services tailored to needs and efficiency"
            />

            <TypesOfRoofing />
        </Layout>
    )
}

export default RoofingPage;