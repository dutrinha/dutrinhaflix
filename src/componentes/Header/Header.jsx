import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex bg-primary-thompson text-white p-4 mb-4 text-xl justify-between">
            <span>Olá, visitante</span>
            <h1> Bem-vindo ao DutrinhaFLIX</h1>
            <Navbar/>
        </header>
    )
}

export default Header