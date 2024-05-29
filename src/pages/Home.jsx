import data from '../../artigos.json'

function Filmes() {
    console.log(data)
    return (
        <>
        <div className='grid grid-cols-3'>
        {data.map(
                (filme, index) => (
                    <div className='card p-5' key={index}>
                    <h1 key={filme.title}>{filme.title}</h1>
                    <img src={filme.image}/>
                    <div className="tags">
                        {
                        filme.tags.map( tag => (
                            <span className="bg-pink-800 text-white p-1 m-1" key={tag}>{tag}</span>

                        ))
                        }   
                    </div>
                    <div className="texto">
                        {
                            filme.text.map(texto => (
                                <p key={texto}>{texto}</p>
                            ))
                        }
                    </div>
                    </div>
                )   
            )
        }
        </div>
        </>
    );
}

export default Filmes