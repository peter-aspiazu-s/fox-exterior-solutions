import { SlideDoneWork } from "@/components/slidedonework/SlideDoneWork";
import { Layout } from "@/layout/Layout";

function DoneWorksPage () {

    return(
        <Layout
            title="Done Works | Page"
            description="Done Works Services"
            keywords="Fox Exterior Solutions, Done Works"
        >
            <div className="completedworks">
                <div className="completedworks__container">
                    <div className="completedworks__title">Done Works</div>
                    <div className="completedworks__container-videos">
                        {/* <video className="completedworks__video" src="/images/trabajos.mp4" controls></video> */}
                        <video className="completedworks__video" src="/images/trabajos2.mp4" controls poster="/images/workdone9.webp"></video>
                        <div className="completedworks__slide">
                            <SlideDoneWork />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DoneWorksPage;