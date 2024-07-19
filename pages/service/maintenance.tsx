import { Layout } from "@/layout/Layout";
import { InfoServices } from "@/components/services/InfoService";


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

function MaintenancePage () {

    return(
        <Layout
            title="MaintenancePage | Page"
            description="MaintenancePage Services"
            keywords="MaintenancePage"
        >
            <InfoServices 
                images={imageArr}
                title="MaintenancePage Services"
                description="Fox Exterior Solutions ensures the longevity of your roof with comprehensive maintenance and inspection services. Our team identifies potential issues early, preventing costly damages and extending the life of your roof. We cater to both residential and commercial properties, offering tailored solutions to meet diverse needs."
                text1="Storm Damage Inspections: Assess roofs for damage caused by severe weather to assist with insurance claims."
                text2="Leak and Repair Inspections: Identify and address existing leaks or visible roof issues to prevent further damage."
            />
        </Layout>
    )
}

export default MaintenancePage;