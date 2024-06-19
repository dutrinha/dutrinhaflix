import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center">
            <ul className="flex gap-8">
                <li><Link className="text-xl font-semibold" to="/">Home</Link></li>
                <li><Link className="text-xl font-semibold" to="filmes">Filmes</Link></li>
                <li><Link className="text-xl font-semibold" to="sobre">Sobre</Link></li>
                <li><Link className="text-xl font-semibold mr-16" to="contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;