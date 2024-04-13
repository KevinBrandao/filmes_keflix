import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from '../../services/api';
import './filmes.css';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            try {
                const response = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "f05896c269dd9568409087f15e68c11f",
                        language: "pt-BR",
                    }
                });
                setFilme(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Filme não encontrado:", error);
                navigate("/", { replace: true });
            }
        }

        loadFilme();

        // Função de limpeza do useEffect
        return () => {
            console.log("Componente foi desmontado");
        };
    }, [navigate, id]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@filmeskeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilmes = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilmes) {
            toast.warn("Filme já adicionado");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@filmeskeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!!!");
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
           
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
                
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/results?search_query=${filme.title}+Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;