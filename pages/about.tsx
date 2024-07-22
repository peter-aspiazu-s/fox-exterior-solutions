import { AboutComponent } from "@/components/about/AboutComponent";
import { Layout } from "@/layout/Layout";

function AboutPage (){

    return(
        <Layout
            title="About | Page"
            description="About page"
            keywords="fox exterior solutions"
        >
            <AboutComponent />
        </Layout>
    )
}

export default AboutPage;