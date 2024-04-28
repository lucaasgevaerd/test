import './styles.css'

import Navbar from './Sections/Navbar/Index'
import Hero from './Sections/Hero'
import Carousel from './Sections/Carousel';
import Simulator from './Sections/Simulator';
import Testimonials from './Sections/Testimonials';
import Registration from './Sections/Registration';
import Footer from './Sections/Footer';


function LandingPage() {

    return (
        <>
            <Navbar />
            <main className='min-h-screen'>
                <Hero />
                <Carousel />
                <Simulator />
                <Testimonials />
                <Registration />
            </main>
            <Footer />
        </>
    )
}

export default LandingPage
