import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1 className="text-3xl p-20 pt-10 pb-10">Filmes</h1>
        <div className="listaFilmes flex flex-row gap-16 flex-wrap p-20 pt-0">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme bg-white text-preto rounded-2xl">
                            <h1 className="text-2xl text-wrap text-center text-cor1 pb-1" key={filmes}>{filme.title}</h1>
                            <img className="w-40" src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                            <Link to={`${filme.id}`} className="flex justify-center bg-cor1 text-branco rounded p-5 pt-1 pb-1">Saiba Mais</Link>
                        </div>
                    )
                )
            }
        </div>
        <div className="bg-cor1 h-96">
            <img src="logo.png" alt="" />
        </div>
        </>
    );
}

export default Filmes;