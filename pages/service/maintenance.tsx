import { Layout } from "@/layout/Layout";
import { InfoServices } from "@/components/services/InfoService";
import { InfoMaintenance } from "@/components/infomaintenance/InfoMaintenance";


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

function MaintenancePage () {

    return(
        <Layout
            title="Maintenance and Inspections | Page"
            description="Maintenance and Inspections Services"
            keywords="MaintenancePage"
        >
            <InfoServices 
                images={imageArr}
                title="Maintenance & Inspection Services"
                description="Fox Exterior. helps you to save money by extending the life of your existing roof through proper maintenance and by inspecting potential issues prior to the issues causing major damages. Who would need an inspection? A person that wants to extend the life of their existing roof and does not necessarily need a new roof. Roofs that are in the 5- 20-year range are prime candidates. A person buying a new home may be interested in this inspection to validate the condition of the roof."
                text1="Storm inspections – see if your existing roof has experienced damage from hail storms or hurricane winds."
                text2="Roof replacement inspections – see if you need a full roof replacement due to age or other conditions."
            />

            <InfoMaintenance />
        </Layout>
    )
}

export default MaintenancePage;