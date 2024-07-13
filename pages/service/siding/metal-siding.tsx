import { InfoServices } from "@/components/services/InfoService";
import { Layout } from "@/layout/Layout";


const imageArr = [
    {image: "/images/siding2.jpg", alt:"Siding Image"},
    {image: "/images/windows.jpg", alt:"Windows Image"},
]

function MetalSidingPage () {

    return(
        <Layout
            title="Siding | Page"
            description="Siding Services"
            keywords="Siding"
        >
            <InfoServices images={imageArr}
                title="Metal Siding"
                // description="Sleek and modern, metal siding is known for its durability and resistance to fire and pests, making it an excellent choice for commercial properties."
                description="Sleek and modern, metal siding is known for its durability and resistance to fire and pests, making it a great choice for commercial properties."
                text1="Instalación de revestimiento metálico que combina estilo contemporáneo y resistencia excepcional"
                text2="Soluciones de revestimiento duradero y resistente al fuego para propiedades comerciales"
            />
        </Layout>
    )
}

export default MetalSidingPage;