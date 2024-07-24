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

function MetalRoofsPage () {

    return(
        <Layout
            title="Metal Roofs | Page"
            description="Metal Roofs Services"
            keywords="Roofing, Metal Roofs"
        >
            <InfoServices images={imageArr}
                title="Metal Roofs"
                description="Metal roofs stand out for their exceptional durability, with a useful life that can exceed 60 years.en fox … tenemos un equipo de profesionales en la instalacion de roof metal standing seam, uno de nuestro mejores productos en el roof de metal que proporciona larga durabilidad, muchos estilos de colores y tu casa se elevará en el mercado. They are resistant to extreme weather conditions and can improve energy efficiency by reflecting radiant solar heat. Available in sheets or tiles, metal roofs add a sleek, contemporary look to any property."
                text1="Installation of metal roofs that resist extreme weather conditions and increase energy efficiency."
                text2="Replacing roofs with modern and durable metal options."
            />
        </Layout>
    )
}

export default MetalRoofsPage;