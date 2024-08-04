import { Layout } from "@/layout/Layout";
import { InfoServices } from "@/components/services/InfoService";
import { TypesOfRoofing } from "@/components/typesofroofing/TypesOfRoofing";


const imageArr = [
    {image: "/images/roofing1.webp", alt:"Roofing Image"},
    {image: "/images/roofing2.webp", alt:"Roofing Image"},
    {image: "/images/roofing3.webp", alt:"Roofing Image"},
    {image: "/images/roofing4.webp", alt:"Roofing Image"},
    {image: "/images/roofing5.webp", alt:"Roofing Image"},
    {image: "/images/roofing6.webp", alt:"Roofing Image"},
    {image: "/images/roofing7.webp", alt:"Roofing Image"},
    {image: "/images/roofing8.webp", alt:"Roofing Image"},
    {image: "/images/roofing9.webp", alt:"Roofing Image"},
]

function RoofingPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices 
                // image={"/images/roofing1.jpg"} 
                images={imageArr}
                title="Roofing Services in Buffalo NY."
                // description="At Fox Exterior Solutions, we specialize in asphalt shingle roofing. As your trusted contractor, our experienced team is dedicated to delivering high-quality asphalt shingle roofing services backed by years of expertise in the industry. 
                // If you&apos;re currently looking for Buffalo roofers or roofing companies near western upstate New York, Fox Exterior Solutions is here to help. Our experienced professionals are happy to meet with you at your convenience to provide you with a free, no-obligation quote and answer any questions you may have about roof repair or installation"
                description="At Fox Exterior Solutions, we specialize in asphalt shingle roofs. As your trusted contractor, our experienced team is dedicated to providing high-quality services backed by years of industry experience. If you are looking for roofers in Buffalo or roofing companies in Western New York State, Fox Exterior Solutions is here to serve you, with more than 15 years’ experience and GAF contractor Certificate, providing more than 50 years warranty on GAF Shingles Products, 15 Years warranty installation. Our experienced professionals are available to meet with you and provide you with a free, no-obligation quote, as well as answer any questions you may have about roof repair or installation."
                text1="Residential roofing services that improve and protect homes."
                text2="Commercial roofing services tailored to needs and efficiency."
            />
            <TypesOfRoofing />
        </Layout>
    )
}

export default RoofingPage;