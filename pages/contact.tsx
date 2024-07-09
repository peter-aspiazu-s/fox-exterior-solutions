import { ContactComponent } from "@/components/contact/ContactComponent";
import { Layout } from "@/layout/Layout";

function ContactPage (){

    return(
        <Layout
            title="Contact | Page"
            description="Contact page"
            keywords="fox exterior solutions"
        >
            <ContactComponent />
        </Layout>
    )
}

export default ContactPage;