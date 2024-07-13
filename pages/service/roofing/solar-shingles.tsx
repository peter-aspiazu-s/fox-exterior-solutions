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

function SolarShinglesPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices images={imageArr}
                title="Solar Shingles."
                // description="Solar shingles, are an alternative to traditional solar panels that look less noticeable and provide more curb appeal. They’re durable, weather-resistant and offer the same energy savings as many of the best solar panels.
                //         The panels are much smaller than conventional solar panels, but they operate in a similar way, with building-integrated photovoltaic systems, an inverter and a circuit that allows the solar energy to be absorbed and flow through the wires into your home."
                description="Solar shingles are an alternative to traditional solar panels that are less visible and improve curb appeal. They are durable, weather resistant, and offer the same energy savings as many of the best solar panels. Although they are smaller than conventional solar panels, they work in a similar way, with photovoltaic systems integrated into the building, an inverter and a circuit that allows solar energy to be absorbed and flow through cables to your home."
                text1="Installation of solar tiles that combine energy efficiency and improved aesthetics"
                text2="Integrated solar energy solutions for efficient energy absorption and distribution"
            />
        </Layout>
    )
}

export default SolarShinglesPage;