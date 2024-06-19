import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-cor1 text-branco text-center items-center p-4 justify-between">
            <img src="logo.png" className="w-36 ml-16"/>
            <Navbar/>
        </header>
        
     );
}

export default Header;