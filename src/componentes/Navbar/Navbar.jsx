import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav>
            <ul className="flex gap-3">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="Filmes">Filmes</Link></li>
                <li><Link to ="Sobre">Sobre</Link></li>
                <li><Link to ="Contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar