import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api';

function Filme() {
    const { id } = useParams();
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
                console.log("Filme Não Encontrado");
            }
        }

        loadFilme();

        // Função de limpeza do useEffect
        return () => {
            console.log("Componente Foi Desmontado");
        };
    }, [id]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <p>{filme.overview}</p>
                {/* Aqui pode adicionar mais detalhes do filme conforme necessário */}
            </div>
        );
    } 
}

export default Filme;
