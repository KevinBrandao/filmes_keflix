import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './home.css';

function Home(){

    const [filmes, setFilmes]  = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "f05896c269dd9568409087f15e68c11f",
                    language: "pt-BR",
                    page: 1,
                }
            } )
            setFilmes(response.data.results.slice(0, 10));
            console.log(response.data.results.slice(0, 10));
    }
    loadFilmes();
}, []);
    
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            {filmes.map((filme) => {
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Home;