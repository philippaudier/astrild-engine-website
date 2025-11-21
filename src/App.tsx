import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import EditorPreview from './components/EditorPreview'
import PerformanceMetrics from './components/PerformanceMetrics'
import Roadmap from './components/Roadmap'
import Community from './components/Community'
import UseCases from './components/UseCases'
import ComparisonTable from './components/ComparisonTable'
import QuickStart from './components/QuickStart'
import Documentation from './components/Documentation'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="features"><Features /></div>
        <div id="showcase"><Showcase /></div>
        <div id="editor"><EditorPreview /></div>
        <div id="performance"><PerformanceMetrics /></div>
        <div id="roadmap"><Roadmap /></div>
        <div id="community"><Community /></div>
        <div id="usecases"><UseCases /></div>
        <div id="comparison"><ComparisonTable /></div>
        <div id="quickstart"><QuickStart /></div>
        <div id="documentation"><Documentation /></div>
        <div id="newsletter"><Newsletter /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
