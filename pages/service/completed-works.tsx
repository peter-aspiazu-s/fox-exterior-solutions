import { Layout } from "@/layout/Layout";

function CompletedWorksPage () {

    return(
        <Layout
            title="Completed Works | Page"
            description="Completed Works Services"
            keywords="Fox Exterior Solutions, Completed Works"
        >
            <div className="completedworks">
                <div className="completedworks__container">
                    <div className="completedworks__title">COMPLETED WORKS</div>
                    <div className="completedworks__container-videos">
                        <video className="completedworks__video" src="/images/trabajos.mp4" controls></video>
                        <video className="completedworks__video" src="/images/trabajos2.mp4" controls></video>
                        <video className="completedworks__video" src="/images/trabajos3.mp4" controls></video>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CompletedWorksPage;