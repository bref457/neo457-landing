import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import PipelineSection from '@/components/sections/PipelineSection'
import SystemSetupSection from '@/components/sections/SystemSetupSection'
import KiNewsSection from '@/components/sections/KiNewsSection'
import DemoSection from '@/components/sections/DemoSection'
import WhyOwnSystemSection from '@/components/sections/WhyOwnSystemSection'
import StorySection from '@/components/sections/StorySection'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StorySection />
      <PipelineSection />
      <DemoSection />
      <KiNewsSection />
      <WhyOwnSystemSection />
      <SystemSetupSection />
      <UseCasesSection />
      <Footer />
    </main>
  )
}
