import Footer from '../containers/Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => (
    <>
        <NavBar/>

        <main>
            { children }
        </main>

        <Footer/>
    </>
)

export default Layout