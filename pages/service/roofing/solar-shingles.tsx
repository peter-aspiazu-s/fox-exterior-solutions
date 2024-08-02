import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";



const imageArr = [
    {image: "/images/solar-shingles.webp", alt:"Solar Shingles Image"},
    {image: "/images/solar-shingles3.jpg", alt:"Solar Shingles Image"},
    {image: "/images/solar-shingles4.jpg", alt:"Solar Shingles Image"},
    {image: "/images/solar-shingles5.jpg", alt:"Solar Shingles Image"},
]

function SolarShinglesPage () {

    return(
        <Layout
            title="Solar Shingles | Page"
            description="Solar Shingles Services"
            keywords="Roofing, Solar Shingles"
        >
            <InfoServices images={imageArr}
                title="Solar Shingles."
                description="Solar  shingles are an alternative to traditional solar panels that are less visible and improve curb appeal. They are durable, weather resistant, and offer the same energy savings as many of the best solar panels. Although they are smaller than conventional solar panels, they work in a similar way, with photovoltaic systems integrated into the building, an inverter and a circuit that allows solar energy to be absorbed and flow through cables to your home.
With years of experience and honest work, Fox Exterior Solutions is one of the certified companies in westerns New York. For the installation of new Timberline Solar by GAF products, we have professional installers."
                text1="We install solar roof tiles that combine energy efficiency and aesthetic improvement."
                text2="Integrated solar energy solutions for efficient energy absorption and distribution."
            />
        </Layout>
    )
}

export default SolarShinglesPage;