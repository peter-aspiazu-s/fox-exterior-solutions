import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/flat-low-slope-roof-styles3.jpg", alt:"Flat/Low Slope Roof Styles Image"},
    {image: "/images/flat-low-slope-roof-styles4.jpg", alt:"Flat/Low Slope Roof Styles Image"},
    {image: "/images/flat-low-slope-roof-styles5.jpg", alt:"Flat/Low Slope Roof Styles Image"}
]


function FlatLowSlopeRoofStylesPage () {

    return(
        <Layout
            title="Flat/Low Slope Roof Styles | Page"
            description="Flat/Low Slope Roof Styles Services"
            keywords="Roofing, Flat/Low Slope Roof Styles"
        >
            <InfoServices images={imageArr}
                title="Flat/Low Slope Roof Styles."
                description="When it comes to professional commercial roofing services, FOX EXTERIOR SOLUTIONS is the best choice. Our team of dedicated professionals bring extensive experience, ensuring the durability and longevity of your commercial property's roof. We understand that a proper roof system is a key element to the life of the building. Therefore, we are committed to properly analyzing roof conditions using advanced technology to identify wet areas that need to be replaced before installing our roof."
                text1="Advanced roof analysis to identify and replace problem areas before installation."
                text2="We install flat, low-slope roofs that ensure the durability and efficiency of the building."
            />
        </Layout>
    )
}

export default FlatLowSlopeRoofStylesPage;