import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/roofing1.jpg", alt:"Roofing Image"},
    {image: "/images/roofing2.jpg", alt:"Roofing Image"},
    {image: "/images/roofing3.jpg", alt:"Roofing Image"},
    {image: "/images/roofing4.jpg", alt:"Roofing Image"},
    {image: "/images/roofing5.jpg", alt:"Roofing Image"},
    {image: "/images/roofing6.jpg", alt:"Roofing Image"},
    {image: "/images/roofing7.jpg", alt:"Roofing Image"},
    {image: "/images/roofing8.jpg", alt:"Roofing Image"},
    {image: "/images/roofing9.jpg", alt:"Roofing Image"},
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
                text1="Advanced roof analysis to identify and replace problem areas before installation"
                text2="Installation of flat and low-slope roofs that ensure the durability and efficiency of the building"
            />
        </Layout>
    )
}

export default FlatLowSlopeRoofStylesPage;