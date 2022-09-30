import '../Styles.css'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
