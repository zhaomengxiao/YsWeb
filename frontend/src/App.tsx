import Banner from "./components/Banner"
import ProductList from "./components/ProductList"
import TechAdvantages from "./components/TechAdvantages"
import "./App.css"
import { SparklesBackground } from "./components/SparklesBackground"
import { Header1 } from "./components/ui/header"

function App() {
  return (
    <>
      <Header1 />
      <SparklesBackground>
        <Banner />
        <ProductList />
        <TechAdvantages />
      </SparklesBackground>
    </>
  )
}

export default App
