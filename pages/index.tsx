import { Layout } from "@/layout/Layout";
import { SectionInfoServices } from "@/components/home/SectionInfoServices";
import { MisionVision } from "@/components/home/MisionVision";


function HomePage() {
  return (
    <Layout
      title=""
      description=""
      keywords=""
    >
      <div>

        <SectionInfoServices />

        <MisionVision />

      </div>
    </Layout>
  )
}


export default HomePage;