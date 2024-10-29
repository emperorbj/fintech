import Sponsors from "@/components/Sponsors"
import Header from "../components/Header"
import AboutUs from "@/components/AboutUs"
import Featured from "@/components/Featured"
import TrustPage from "@/components/TrustPage"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Purchase from "@/components/Purchase"
import Footer from "@/components/Footer"


const Home = () => {
    return (
        <div>
            <Header />
            <Sponsors/>
            <AboutUs/>
            <Featured/>
            <TrustPage/>
            <Services/>
            <Testimonials/>
            <Purchase/>
            <Footer/>
        </div>
    )
}

export default Home
