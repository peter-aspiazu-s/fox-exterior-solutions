import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";

function SolarShinglesPage () {

    return(
        <Layout
            title="Roofing | Page"
            description="Roofing Services"
            keywords="Roofing"
        >
            <InfoServices image={"/images/roofing4.jpg"} alt="roofing image"
                title="Solar Shingles."
                description="Solar shingles, are an alternative to traditional solar panels that look less noticeable and provide more curb appeal. They’re durable, weather-resistant and offer the same energy savings as many of the best solar panels.
                        The panels are much smaller than conventional solar panels, but they operate in a similar way, with building-integrated photovoltaic systems, an inverter and a circuit that allows the solar energy to be absorbed and flow through the wires into your home."
                text1="Installation of solar tiles that combine energy efficiency and improved aesthetics"
                text2="Integrated solar energy solutions for efficient energy absorption and distribution"
            />
        </Layout>
    )
}

export default SolarShinglesPage;