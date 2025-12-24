import HeroSection from './components/sections/HeroSection'
import InterestSection from './components/sections/InterestSection'
import SolutionSection from './components/sections/SolutionSection'
import TransformationSection from './components/sections/TransformationSection'
import ObjectionSection from './components/sections/ObjectionSection'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <InterestSection />
      <SolutionSection />
      <TransformationSection />
      <ObjectionSection />
      <CTASection />
    </main>
  )
}

export default App
