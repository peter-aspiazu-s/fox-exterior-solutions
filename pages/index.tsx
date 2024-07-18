import { Layout } from "@/layout/Layout";
import { SectionInfoServices } from "@/components/home/SectionInfoServices";
import { MisionVision } from "@/components/home/MisionVision";


function HomePage() {
  return (
    <Layout
      title="Home | Page"
      description="Home Page Fox Exterior Solutions"
      keywords="Fox Exterior Solutions"
    >
      <div>

        <SectionInfoServices />

        <MisionVision />

      </div>
    </Layout>
  )
}


export default HomePage;