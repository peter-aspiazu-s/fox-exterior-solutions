import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function FlatLowSlopeRoofStylesPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing5.jpg"} alt="roofing image"
                title="Flat/Low Slope Roof Styles."
                description="When it comes to professional commercial roofing services,	FOX EXTERIOR SOLUTIONS are the best choice. Our team of dedicated professionals bring extensive experience to the table, ensuring the durability and longevity of your commercial property's roof
                            We understand that a proper roof system is a key element of the building lifetime. Therefore, we are committed to properly analyze the roofing conditions using advance technology to identify wet areas that need replaced prior to installing our roof."
                text1="Advanced roof analysis to identify and replace problem areas before installation"
                text2="Installation of flat and low-slope roofs that ensure the durability and efficiency of the building"
            />
        </Layout>
    )
}

export default FlatLowSlopeRoofStylesPage;