import  data  from "../../artigos.json";

function Home() {
    return (
        <>
        <div className="bg-deadpool h-svh w-full mb-10"> 
        </div>
        <h1 className="text-2xl"></h1>
        <div className="grid grid-cols-2">
        {
            data.map(
                (filme, index) => (
                    <>
                    <div className="card text-preto m-16 flex flex-col justify-around rounded-2xl" key={index} >
                        <img className="w-full rounded" src={filme.image} alt="" />
                        <h1 className="text-2xl"  key={filme.title}>{filme.title}</h1>
                        <div className="tags flex" >
                        {
                            filme.tags.map( tag => (
                                <span className="cor1 text-branco p-2 pt-0.5 pb-1 rounded mr-1 mb-2 mt-2 bg-cor1" key={tag}>{tag}</span>
                            ))
                        }
                        </div>
                        <div className=" mb-4 text-justify" >
                        {
                            filme.text.map( text => (
                                <p  className="" key={text}>{text}</p>
                            ))
                        }
                        </div>
                    </div>
                    </>
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

export default Home;