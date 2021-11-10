import { Link } from "react-router-dom"


const Navigation = () => {
    const logo = {
        height: 90,
    }
    return (
        <>
            {/* <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link> */}

            <nav className="container mx-auto flex items-center justify-between py-5">
                    <Link to="/">
                    <img src="/img/logo.png" style={logo} alt="logo"/>
                    </Link>
                    <ul className="flex items-center ">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/product">Product</Link></li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation
